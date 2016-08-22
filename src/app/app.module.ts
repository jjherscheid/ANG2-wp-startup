import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { APP_ROUTES }     from './app.routes';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        DashboardModule,
        APP_ROUTES
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
