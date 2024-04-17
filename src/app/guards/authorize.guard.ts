import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authorizeGuard: CanActivateFn = (route, state) => {

  let token = localStorage.getItem('token');

  if(!token){
    let router = inject(Router);
    router.navigateByUrl('/account/login');
    return false;
  }

  return true;
};
