import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  
  // Verificamos si el usuario está autenticado
  return authService.isLoggedIn().pipe(
    map(isLoggedIn => {
      if (isLoggedIn) {
        return true; 
      } else {
        authService.redirectToLogin(); // Puedes implementar esta función en el servicio
        return false; // Bloquear acceso si no está autenticado
      }
    })
  );
};
