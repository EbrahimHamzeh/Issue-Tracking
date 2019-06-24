import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationLayoutComponent } from './authentication-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'user',
    component: AuthenticationLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
