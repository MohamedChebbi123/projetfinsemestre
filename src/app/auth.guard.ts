import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);  // Inject Router for navigation

  const email = localStorage.getItem('email');
  const password = localStorage.getItem('mot_de_passe');

  // Check if email and password exist in localStorage
  if (email && password) {
    return true;  // Allow access to the route if authenticated
  }

  // Redirect to login if not authenticated
  router.navigate(['/login']);
  return false;
};
