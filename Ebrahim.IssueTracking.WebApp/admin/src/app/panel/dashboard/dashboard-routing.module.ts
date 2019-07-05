import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { PanelLayoutComponent } from 'src/app/shared/Layout/panel-layout/panel-layout.component';

const routes: Routes = [{
  path: '',
  component: DashboardListComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
