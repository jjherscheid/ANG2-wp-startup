import { AppComponent } from './app.component';

describe('Dashboard App', () => {

    // System Under Test
    let sut: AppComponent;    

    beforeEach(() => {
        sut = new AppComponent();
    });

    it('should have correct title', () => {
        expect(sut.title).toBe('My App Component');
    });
});
