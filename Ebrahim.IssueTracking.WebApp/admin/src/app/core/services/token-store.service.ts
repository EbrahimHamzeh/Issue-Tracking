import { Injectable } from '@angular/core';
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
  
  getDecodedAccessToken(): any {
    return jwt_decode
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

  deleteAuthToken() {
    if (this.rememberMe()) {
      this.browserStorageService.removeLocal(AuthTokenType[AuthTokenType.AccessToken])
      this.browserStorageService.removeLocal(AuthTokenType[AuthTokenType.RefreshToken])
    } else {
      this.browserStorageService.removeSession(AuthTokenType[AuthTokenType.AccessToken]);
      this.browserStorageService.removeSession(AuthTokenType[AuthTokenType.RefreshToken]);
    }
    this.browserStorageService.removeLocal(this.rememberMeToken);
  }

  rememberMe(): boolean {
    return this.browserStorageService.getLocal(this.rememberMeToken) === true;
  }

  setRememberMe(value: boolean): void {
    this.browserStorageService.setLocal(this.rememberMeToken, value);
  }
}
