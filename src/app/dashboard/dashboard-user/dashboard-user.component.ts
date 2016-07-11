import { Component, Input } from '@angular/core';

import { User } from '../../shared';

@Component({
    selector: 'my-dashboard-user',
    template: require('./dashboard-user.component.html'),
    styles: [require('./dashboard-user.component.scss')]
})
export class DashboardUserComponent {

    @Input()
    public user: User;
}
