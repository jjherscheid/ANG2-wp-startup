import { Directive } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardUserComponent } from './dashboard-user';

describe('Dashboard Component using TestBed', () => {

    @Directive({selector: 'my-dashboard-user', inputs: ['user']})
    class MockAreaStateWidgetComponent{}

    // System Under Test
    let sut: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let element: any;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent, MockAreaStateWidgetComponent],
            providers: [ ]
        });

        fixture = TestBed.createComponent(DashboardComponent);
        sut = fixture.componentInstance;
        element = fixture.nativeElement;
    });
   

    it('should have the correct widgets', () => {
        expect(sut.users.length).toBe(6);
    });

    it('should add the last widget during init', () => {
        sut.ngOnInit();
        expect(sut.users.length).toBe(7);
    });
});
