import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelLayoutComponent } from './shared/Layout/panel-layout/panel-layout.component';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'dashboard',
    component: PanelLayoutComponent,
    children: [{
      path: '',
      loadChildren: './panel/dashboard/dashboard.module#DashboardModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
