import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
  beforeEachProviders(() => [
    AppComponent
  ]);
  it ('should work', inject([AppComponent], (app: AppComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));

  it('should have correct title', inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toBe('MyOwnTitle');
  }));
});
