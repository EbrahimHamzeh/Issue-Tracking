import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStoreService } from './services/token-store.service';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { AuthTokenType } from './models/auth-token-type';
import { retryWhen, mergeMap, take, catchError, delay } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private delayBetweenRetriesMs = 1000;
    private numberOfRetries = 3;
    private authorizationHeader = 'Authorization';

    constructor(
        private tokenStorageService: TokenStoreService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.tokenStorageService.getRawAuthToken(AuthTokenType.AccessToken);
        if (accessToken) {
            request = request.clone({
                headers: request.headers.set(this.authorizationHeader, `Bearer ${accessToken}`)
            });
            return next.handle(request).pipe(
                retryWhen(errors => errors.pipe(
                    mergeMap((error: HttpErrorResponse, retryAttempt: number) => {
                        if (retryAttempt === this.numberOfRetries - 1) {
                            console.log(`HTTP call '${request.method} ${request.url}' failed after ${this.numberOfRetries} retries.`);
                            return throwError(error); // no retry
                        }

                        switch (error.status) {
                            case 400:
                            case 404:
                                return throwError(error); // no retry
                        }

                        return of(error); // retry
                    }),
                    delay(this.delayBetweenRetriesMs),
                    take(this.numberOfRetries)
                )),
                catchError((error: any, caught: Observable<HttpEvent<any>>) => {
                    console.error({ error, caught });
                    if (error.status === 401 || error.status === 403) {
                        const newRequest = this.getNewAuthRequest(request);
                        if (newRequest) {
                            console.log('Try new AuthRequest ...');
                            return next.handle(newRequest);
                        }
                        this.router.navigate(['/authentication/user/accessDenied']);
                    }
                    return throwError(error);
                })
            );
        } else {
            // login page
            return next.handle(request);
        }
    }

    getNewAuthRequest(request: HttpRequest<any>): HttpRequest<any> | null {
        const newStoredToken = this.tokenStorageService.getRawAuthToken(AuthTokenType.AccessToken);
        const requestAccessTokenHeader = request.headers.get(this.authorizationHeader);
        if (!newStoredToken || !requestAccessTokenHeader) {
            // tslint:disable-next-line:max-line-length
            console.log('There is no new AccessToken.', {
                // tslint:disable-next-line:object-literal-shorthand
                requestAccessTokenHeader: requestAccessTokenHeader,
                // tslint:disable-next-line:object-literal-shorthand
                newStoredToken: newStoredToken
            });
            return null;
        }
        const newAccessTokenHeader = `Bearer ${newStoredToken}`;
        if (requestAccessTokenHeader === newAccessTokenHeader) {
            // tslint:disable-next-line:max-line-length
            console.log('There is no new AccessToken.', {
                // tslint:disable-next-line:object-literal-shorthand
                requestAccessTokenHeader: requestAccessTokenHeader,
                // tslint:disable-next-line:object-literal-shorthand
                newAccessTokenHeader: newAccessTokenHeader
            });
            return null;
        }

        return request.clone({ headers: request.headers.set(this.authorizationHeader, newAccessTokenHeader) });
    }
}
