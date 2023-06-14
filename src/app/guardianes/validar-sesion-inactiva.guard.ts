import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';

/**
 * Guard that checks if the user's session is still active. If the session is inactive,
 * the user is redirected to the login page.
 * @returns {boolean} - Returns true if the session is still active, false otherwise.
 */
export const ValidarSesionInactivaGuard = () => {
  const servicioSeguridad = inject(SeguridadService);
  const router = inject(Router);

  let existeSesion = servicioSeguridad.ValidaCionDeSesion();

  if (existeSesion) {
    router.navigate(['/inicio']);
    return false;
  }
  return true;
};
