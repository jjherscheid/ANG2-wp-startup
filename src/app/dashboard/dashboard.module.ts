import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent }   from './dashboard.component';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import { DashboardUserComponent } from './dashboard-user';

@NgModule({
    imports: [CommonModule, DASHBOARD_ROUTES],
    exports: [],
    declarations: [DashboardComponent, DashboardUserComponent],
    providers: []
})
export class DashboardModule { }
