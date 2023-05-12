import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { configuracionRutasBackend } from '../config/configuracion.rutas.backend';
import { InmuebleModel } from '../modelos/inmueble.model';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';

@Injectable({
  providedIn: 'root',
})
export class ParametrosService {
  urlBase: string = configuracionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) {}
/**
 * listado de los inmuebles
 * @returns 
 */
  listarRegistros(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(
      `${this.urlBase}inmuebles?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`
    );
  }
}
