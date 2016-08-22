import { NgModule }       from '@angular/core';
import { CommonModule }       from '@angular/common';

import { DASHBOARD_ROUTES, DashboardComponent } from './';
import { DashboardUserComponent } from './dashboard-user';

@NgModule({
  imports:      [ DASHBOARD_ROUTES, CommonModule ],
  declarations: [ DashboardComponent, DashboardUserComponent ],
  providers:    [ /* SERVICES */ ]
})
export class DashboardModule { }
