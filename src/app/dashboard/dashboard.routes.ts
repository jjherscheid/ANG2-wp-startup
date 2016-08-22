import { RouterModule } from '@angular/router';

import { DashboardComponent } from './';

export const DASHBOARD_ROUTES = RouterModule.forChild([
    { path: 'dashboard', component: DashboardComponent }
]);
