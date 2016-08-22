import { Routes,
         RouterModule } from '@angular/router';

export const routes: Routes = [
        { path: '', redirectTo: 'dashboard',  pathMatch: 'full'}
];

export const APP_ROUTES = RouterModule.forRoot(routes);
