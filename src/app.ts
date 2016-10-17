import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

// Styling
import '../public/css/styles.scss';

declare var $: JQueryStatic;
declare var _: UnderscoreStatic;

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
