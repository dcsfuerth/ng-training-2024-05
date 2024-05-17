import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bookDetailEnterGuard } from './book-detail-enter.guard';

describe('bookDetailEnterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookDetailEnterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
