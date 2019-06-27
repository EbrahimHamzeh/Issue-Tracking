import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { APP_CONFIG, AppConfig } from './services/app.config';
import { ApiConfigService } from './services/api-config.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    // components that are used in app.component.ts will be listed here.
  ],
  declarations: [
    // components that are used in app.component.ts will be listed here.
  ],
  providers: [
    /* ``No`` global singleton services of the whole app should be listed here anymore!
       Since they'll be already provided in AppModule using the `tree-shakable providers` of Angular 6.x+ (providedIn: 'root').
       This new feature allows cleaning up the providers section from the CoreModule.
       But if you want to provide something with an InjectionToken other that its class, you still have to use this section.
    */
    {
      provide: APP_CONFIG,
      useValue: AppConfig
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ApiConfigService) => () => config.loadApiConfig(),
      deps: [ApiConfigService],
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule should be imported ONLY in AppModule.');
    }
  }
}
