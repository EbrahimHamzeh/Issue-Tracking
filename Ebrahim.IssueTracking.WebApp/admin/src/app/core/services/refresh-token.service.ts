import { Injectable, Inject } from '@angular/core';
import { Subscription, throwError, timer } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { TokenStoreService } from './token-store.service';
import { APP_CONFIG, IAppConfig } from './app.config';
import { ApiConfigService } from './api-config.service';
import { BrowserStorageService } from './browser-storage.service';
import { UtilsService } from './utils.service';
import { AuthTokenType } from '../models/auth-token-type';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {

  private refreshTokenTimerCheckId = 'is_refreshToken_timer_started';
  private refreshTokenSubscription: Subscription | null = null;

  constructor(
    private tokenStorageService: TokenStoreService,
    @Inject(APP_CONFIG) private appConfig: IAppConfig,
    private apiConfigService: ApiConfigService,
    private http: HttpClient,
    private browserStorageService: BrowserStorageService,
    private utilsService: UtilsService
  ) { }

  scheduleRefreshtoken(isAuthUserLoggedIn: boolean, calledFromLogin: boolean) {
    this.unscheduleRefreshtoken(false);

    if (!isAuthUserLoggedIn) {
      return;
    }

    const expDateUtc = this.tokenStorageService.getAccessTokenExpirationDateUtc();
    if (!expDateUtc) {
      throw new Error('This access token has not the "exp" property.');
    }

    const expiresAtUtc = expDateUtc.valueOf();
    const nowUtc = new Date().valueOf();
    const threeSeconds = 3000;

    const initialDelay = Math.max(threeSeconds, expiresAtUtc - nowUtc - threeSeconds);
    console.log('Initial scheduleRefreshToken Delay(ms)', initialDelay);
    const timerSource$ = timer(initialDelay);
    this.refreshTokenSubscription = timerSource$.subscribe(() => {
      if (calledFromLogin) {
        this.refreshToken(isAuthUserLoggedIn);
      } else {
        this.scheduleRefreshtoken(isAuthUserLoggedIn, false);
      }
    });

    if (calledFromLogin) {
      this.setRefreshTokenTimerStarted();
    }
  }

  private setRefreshTokenTimerStarted(): void {
    this.browserStorageService.setLocal(this.refreshTokenTimerCheckId,
      { isStarted: true }
    );
  }

  unscheduleRefreshtoken(cancelTimerCheckToken: boolean) {
    if (this.refreshTokenSubscription) {
      this.refreshTokenSubscription.unsubscribe();
    }

    if (cancelTimerCheckToken) {
      this.deleteRefreshTokenTimerCheckId();
    }
  }

  private refreshToken(isAuthUserLoggedIn: boolean) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const model = { refreshToken: this.tokenStorageService.getRawAuthToken(AuthTokenType.RefreshToken) };
    return this.http
      .post(`${this.appConfig.apiEndpoint}/${this.apiConfigService.configuration.refreshTokenPath}`,
        model, { headers })
      .pipe(
        map(response => response || {}),
        catchError((error: HttpErrorResponse) => throwError(error)))
      .subscribe(result => {
        console.log('RefreshToken Result', result);
        this.tokenStorageService.storeLoginSession(result);
        this.scheduleRefreshtoken(isAuthUserLoggedIn, false);
      });
  }

  private deleteRefreshTokenTimerCheckId() {
    this.browserStorageService.removeLocal(this.refreshTokenTimerCheckId);
  }

}
