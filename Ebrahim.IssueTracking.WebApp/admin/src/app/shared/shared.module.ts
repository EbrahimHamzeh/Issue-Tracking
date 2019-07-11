import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';
import { PanelLayoutComponent } from './Layout/panel-layout/panel-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderMenuComponent } from './component/header-menu/header-menu.component';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { HasAuthUserViewPermissionDirective } from './directives/has-auth-user-view-permission.directive';
import { IsVisibleForAuthUserDirective } from './directives/is-visible-for-auth-user.directive';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ToggleDirective } from './directives/toggle.directive';
import { SparklineChartDirective } from './directives/sparkline-chart.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule
  ],
  entryComponents: [
    // All components about to be loaded "dynamically" need to be declared in the entryComponents section.
  ],
  declarations: [
    HeaderMenuComponent,
    PanelLayoutComponent,
    EqualValidatorDirective,
    HasAuthUserViewPermissionDirective,
    IsVisibleForAuthUserDirective,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ToggleDirective,
    SparklineChartDirective
    // common and shared components/directives/pipes between more than one module and components will be listed here.
  ],
  exports: [
    // common and shared components/directives/pipes between more than one module and components will be listed here.
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    PanelLayoutComponent,
    NgbModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    // Forcing the whole app to use the returned providers from the AppModule only.
    return {
      ngModule: SharedModule,
      providers: [ /* All of your services here. It will hold the services needed by `itself`. */]
    };
  }
}
