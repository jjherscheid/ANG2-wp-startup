import { addProviders, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Dashboard App', () => {

    // System Under Test
    let sut: AppComponent;

    beforeEach(() => {
        addProviders([AppComponent]);
    });

    beforeEach(inject([AppComponent], (app: AppComponent) => {
        sut = app;
    }));

    it('should have correct title', () => {
        expect(sut.title).toBe('My App Component');
    });
});
