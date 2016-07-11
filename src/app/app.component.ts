import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../../public/css/styles.scss';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    directives: [        
        ROUTER_DIRECTIVES
    ]
})
export class AppComponent {
    public title = 'My App Component';
}
