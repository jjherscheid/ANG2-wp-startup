import { provideRouter, RouterConfig } from '@angular/router';

// import components used by Router
import { DashboardComponent } from './dashboard';

export const routes: RouterConfig = [
    { path: '', redirectTo: 'dashboard'},
    { path: 'dashboard', component: DashboardComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
