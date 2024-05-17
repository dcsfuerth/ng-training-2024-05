import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const bookDetailEnterGuard: CanActivateFn = (route, state) => {
  console.log('bookDetailEnterGuard', { route, state }, route.params['isbn']);

  if (route.params['isbn'] !== '12345678') {
    return true;
  }
  return inject(Router).createUrlTree(['/welcome']);
};
