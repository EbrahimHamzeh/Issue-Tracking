import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

import { BrowserStorageService } from './browser-storage.service';
import { ApiConfigService } from './api-config.service';
import { AuthTokenType } from '../models/auth-token-type';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class TokenStoreService {

  private rememberMeToken = 'rememberMe_token';

  constructor(
    private browserStorageService: BrowserStorageService,
    private utilsService: UtilsService,
    private apiConfigService: ApiConfigService
  ) { }

  // برای بیرون کشیدن اطلاعات توکن از حافطه مرورگر
  getRawAuthToken(tokenType: AuthTokenType): string {
    if (this.rememberMe()) {
      return this.browserStorageService.getLocal(AuthTokenType[tokenType]);
    } else {
      return this.browserStorageService.getSession(AuthTokenType[tokenType]);
    }
  }

  // برای دیکد کردن اطلاعات توکن ارسالی از سرور
  getDecodedAccessToken(): any {
    return jwt_decode(this.getRawAuthToken(AuthTokenType.AccessToken));
  }

  // نمایش نام نمایشی کاربر
  getAuthUserDisplayName(): string {
    return this.getDecodedAccessToken().DisplayName;
  }

  // تشخیص تاریخ از بین رفتن اعتبار توکن
  getAccessTokenExpirationDateUtc(): Date | null {
    const decode = this.getDecodedAccessToken();
    if (decode.exp === undefined) {
      return null;
    }
    const date = new Date(0); // The 0 sets the date to the epoch
    date.setUTCSeconds(decode.exp);
    return date;
  }

  // اگر اعتبار توکن تموم شده باشه boolean  برمیگردونه
  isAccessTokenExpired(): boolean {
    const expirationDateUtc = this.getAccessTokenExpirationDateUtc();
    if (!expirationDateUtc) {
      return true;
    }

    return !(expirationDateUtc.valueOf() > new Date().valueOf());
  }

  // ثبت توکن برای اساس مرابه خاطربسپار
  setToken(tokenType: AuthTokenType, tokenValue: string): void {
    if (this.utilsService.isEmptyString(tokenValue)) {
      console.error(`${AuthTokenType[tokenType]} is null or empty.`);
    }

    if (tokenType === AuthTokenType.AccessToken && this.utilsService.isEmptyString(tokenValue)) {
      throw new Error('AccessToken can\'t be null or empty.');
    }

    if (this.rememberMe()) {
      this.browserStorageService.setLocal(AuthTokenType[tokenType], tokenValue);
    } else {
      this.browserStorageService.setSession(AuthTokenType[tokenType], tokenValue);
    }
  }

  getDecodedTokenRoles(): string[] | null {
    const decodedToken = this.getDecodedAccessToken();
    const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if (!roles) {
      return null;
    }

    if (Array.isArray(roles)) {
      return roles.map(role => role.toLowerCase());
    } else {
      return [roles.toLowerCase()];
    }
  }

  // ذخیره توکن ها
  storeLoginSession(response: any): void {
    this.setToken(AuthTokenType.AccessToken, response[this.apiConfigService.configuration.accessTokenObjectKey]);
    this.setToken(AuthTokenType.RefreshToken, response[this.apiConfigService.configuration.refreshTokenObjectKey]);
  }

  // حذف توکن های اعتبار سنجی
  deleteAuthTokens() {
    if (this.rememberMe()) {
      this.browserStorageService.removeLocal(AuthTokenType[AuthTokenType.AccessToken]);
      this.browserStorageService.removeLocal(AuthTokenType[AuthTokenType.RefreshToken]);
    } else {
      this.browserStorageService.removeSession(AuthTokenType[AuthTokenType.AccessToken]);
      this.browserStorageService.removeSession(AuthTokenType[AuthTokenType.RefreshToken]);
    }
    this.browserStorageService.removeLocal(this.rememberMeToken);
  }

  // آیا گزینه مرا به خاطر بسپار را کاربر انتخاب کرده است؟
  rememberMe(): boolean {
    return this.browserStorageService.getLocal(this.rememberMeToken) === true;
  }

  // مقدار دهی مرا به خاطر بسپار
  setRememberMe(value: boolean): void {
    this.browserStorageService.setLocal(this.rememberMeToken, value);
  }

  // آیا مقدار توکنها ذخیره شده است؟
  hasStoredAccessAndRefreshTokens(): boolean {
    const accessToken = this.getRawAuthToken(AuthTokenType.AccessToken);
    const refreshToken = this.getRawAuthToken(AuthTokenType.RefreshToken);

    return !this.utilsService.isEmptyString(accessToken) && !this.utilsService.isEmptyString(refreshToken);
  }
}
