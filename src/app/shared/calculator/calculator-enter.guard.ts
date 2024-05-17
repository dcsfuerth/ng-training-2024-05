import { CanActivateFn } from '@angular/router';

export const calculatorEnterGuard: CanActivateFn = (route, state) => {
  return false;
};
