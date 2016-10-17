import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Routing of application
import { AppRoutingModule } from './app.routing';

// Feature Modules (Non Lazy Loaded)
import { DashboardModule } from './dashboard';

// Root Application Component 
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,    
        AppRoutingModule,
        
        DashboardModule
    ],
    declarations: [AppComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
