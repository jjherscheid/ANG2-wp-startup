import { Component, OnInit } from '@angular/core';

import { User } from '../shared';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public users: User[] = [
        new User( 'Johnny', 23),
        new User( 'Maria', 35 ),
        new User( 'Sofie', 57 ),
        new User( 'Clint', 68 ),
        new User( 'Peter', 12 ),
        new User( 'Stephen', 44 )
    ];

    constructor() {
    }

    public ngOnInit() {
        this.users.push(new User('Lara', 12));
    }
}
