import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<string>('app.config');

export interface IAppConfig {
    apiEndpoint: string;
    apiSettingsPath: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: '/api',
    apiSettingsPath: 'ApiSettings'
};
