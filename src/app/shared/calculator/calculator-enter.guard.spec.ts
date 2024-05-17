import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { calculatorEnterGuard } from './calculator-enter.guard';

describe('calculatorEnterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => calculatorEnterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
