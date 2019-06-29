import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationLayoutComponent } from './authentication-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  declarations: [LoginComponent, AuthenticationLayoutComponent, AccessDeniedComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
