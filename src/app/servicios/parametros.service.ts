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
  //  */
  // listarRegistros(): Observable<InmuebleModel[]> {
  //   let limit = ConfiguracionPaginacion.registrosPorPagina;
  //   let skip = (pag - 1) * limit;
  //   return this.http.get<InmuebleModel[]>(
  //     `${this.urlBase}inmuebles-paginado?filter={"limit":${limit},"skip":${skip}}`
  //   );
  // }

  listarRegistros(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(
      `${this.urlBase}inmuebles?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`
    );
  }
}
