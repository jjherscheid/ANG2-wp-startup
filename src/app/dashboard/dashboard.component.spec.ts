import { addProviders, inject } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('Dashboard Component', () => {

    // System Under Test
    let sut: DashboardComponent;

    beforeEach(() => {
        addProviders([DashboardComponent]);
    });

    beforeEach(inject([DashboardComponent], (app: DashboardComponent) => {
        sut = app;
    }));

    it('should have the correct widgets', () => {
        expect(sut.users.length).toBe(6);
    });

    it('should add the last widget during init', () => {
        sut.ngOnInit();
        expect(sut.users.length).toBe(7);
    });
});
