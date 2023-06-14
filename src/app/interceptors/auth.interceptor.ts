import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from '../servicios/seguridad.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private servicioSeguridad: SeguridadService) {}

  /**
   * Intercepts an HTTP request and adds an authorization header with a bearer token to it.
   * @param {HttpRequest<any>} request - The HTTP request to intercept.
   * @param {HttpHandler} next - The next handler in the chain.
   * @returns {Observable<HttpEvent<any>>} - An observable that emits the HTTP response.
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.servicioSeguridad.obtenerTokenLS();
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next.handle(request);
  }
}
