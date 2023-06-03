import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configuracionRutasBackend } from '../config/configuracion.rutas.backend';
import { InmuebleModel } from '../modelos/inmueble.model';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListarInmueblesService {
  urlBase: string = configuracionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient) {}
  // con filtro
  //http://localhost:3001/inmuebles?filter={"fields":["name","type","precioAlquiler"],"where":{"precioAlquiler":{"lt":1000000}}}

  ObtenerInmuebles() {
    return this.http.get(`${this.urlBase}inmuebles`);
  }

  listarRegistros(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(
      `${this.urlBase}producto?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`
    );
  }
}
