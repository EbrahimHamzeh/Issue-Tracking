import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { APP_CONFIG, IAppConfig } from './app.config';
import { ApiConfigService } from './api-config.service';
import { TokenStoreService } from './token-store.service';
import { Credentials } from '../models/credentials';
import { AuthUser } from '../models/auth-user';
import { RefreshTokenService } from './refresh-token.service';
import { AuthTokenType } from '../models/auth-token-type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatusSource = new BehaviorSubject<boolean>(false);
  authStatus$ = this.authStatusSource.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: IAppConfig,
    private apiConfigService: ApiConfigService,
    private tokenStoreService: TokenStoreService,
    private refreshTokenService: RefreshTokenService
  ) { }

  login(credentials: Credentials): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.appConfig.apiEndpoint}/${this.apiConfigService.configuration.loginPath}`,
        credentials, { headers })
      .pipe(
        map((response: any) => {
          this.tokenStoreService.setRememberMe(credentials.rememberMe);
          if (!response) {
            console.error('There is no `{\'' + this.apiConfigService.configuration.accessTokenObjectKey +
              '\':\'...\',\'' + this.apiConfigService.configuration.refreshTokenObjectKey + '\':\'...value...\'}` response after login.');
            this.authStatusSource.next(false);
            return false;
          }
          this.tokenStoreService.storeLoginSession(response);
          console.log('Logged-in user info', this.getAuthUser);
          this.refreshTokenService.scheduleRefreshtoken(true, true);
          this.authStatusSource.next(true);
          return true;
        }),
        catchError((error: HttpErrorResponse) => throwError(error))
      );
  }

  logout(navigateToHome: boolean): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const refreshToken = encodeURIComponent(this.tokenStoreService.getRawAuthToken(AuthTokenType.RefreshToken));

    this.http
      .get(`${this.appConfig.apiEndpoint}/${this.apiConfigService.configuration.logoutPath}?refreshToken=${refreshToken}`,
        { headers })
      .pipe(
        map(response => response || {}),
        catchError((error: HttpErrorResponse) => throwError(error)),
        finalize(() => {
          this.tokenStoreService.deleteAuthTokens();
          this.refreshTokenService.unscheduleRefreshtoken(true);
          this.authStatusSource.next(false);
          if (navigateToHome) {
            this.router.navigate(['/authentication/user/login']);
          }
        })
      )
      .subscribe(result => {
        console.log('logout', result);
      });
  }

  isAuthUserInRoles(requiredRoles: string[]): boolean {
    const user = this.getAuthUser();
    if (!user || !user.roles) {
      return false;
    }

    if (user.roles.indexOf(this.apiConfigService.configuration.adminRoleName.toLocaleLowerCase()) >= 0) {
      return true;
    }
    return requiredRoles.some(requiredRole => {
      if (user.roles) {
        return user.roles.indexOf(requiredRole.toLowerCase()) >= 0;
      } else {
        return false;
      }
    });
  }

  isAuthUserLoggedIn(): boolean {
    return this.tokenStoreService.hasStoredAccessAndRefreshTokens() &&
      !this.tokenStoreService.isAccessTokenExpired();
  }

  getAuthUser(): AuthUser | null {
    if (!this.isAuthUserLoggedIn()) {
      return null;
    }

    const decodedToken = this.tokenStoreService.getDecodedAccessToken();
    const roles = this.tokenStoreService.getDecodedTokenRoles();
    return Object.freeze({
      userId: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
      userName: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
      displayName: decodedToken.DisplayName,
      roles
    });
  }
}
