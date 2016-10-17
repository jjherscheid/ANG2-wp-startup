import { Component, Input } from '@angular/core';

import { User } from '../../shared';

@Component({
    selector: 'my-dashboard-user',
    templateUrl: './dashboard-user.component.html',
    styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent {

    @Input()
    public user: User;
}
