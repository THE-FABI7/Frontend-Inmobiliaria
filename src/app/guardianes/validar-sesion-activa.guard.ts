import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class ValidarSesionActivaGuard implements CanActivate {
  constructor(
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  /**
   * Determines if the user can activate the requested route. Checks if there is an active session
   * and returns true if there is, otherwise redirects to the login page and returns false.
   * @param {ActivatedRouteSnapshot} route - The route requested by the user.
   * @param {RouterStateSnapshot} state - The current state of the router.
   * @returns {Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree} - 
   * Returns true if the user can activate the route, otherwise redirects to the login page and returns false.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let existeSesion = this.servicioSeguridad.ValidaCionDeSesion();

    if (existeSesion) {
      return true;
    }
    this.router.navigate(["/inicio"])
    return false;
  }
}
