import { Component } from '@angular/core';
import '../../public/css/styles.scss';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})
export class AppComponent {
    public title = 'My App Component';
}
