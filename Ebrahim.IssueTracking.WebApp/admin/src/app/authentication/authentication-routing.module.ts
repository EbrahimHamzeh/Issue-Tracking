import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationLayoutComponent } from './authentication-layout.component';
import { LoginComponent } from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthGuardPermission } from '../core/models/auth-guard-permission';

const routes: Routes = [
  {
    path: 'user',
    component: AuthenticationLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'accessDenied', component: AccessDeniedComponent,
          data: {
            permission: {
              permittedRoles: ['Admin', 'User']
            } as AuthGuardPermission
          },
        canActivate: [authga]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
