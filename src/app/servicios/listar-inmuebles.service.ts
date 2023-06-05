import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configuracionRutasBackend } from '../config/configuracion.rutas.backend';
import { InmuebleModel } from '../modelos/inmueble.model';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';
import { Observable } from 'rxjs';
import { PaginadorInmuebleModel } from '../modelos/paginador.inmueble.model';
import { ArchivoModel } from '../modelos/archivo.model';

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
      `${this.urlBase}inmuebles?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`
    );
  }

  // listarRegistrosPaginados(): Observable<InmuebleModel[]> {
  //   return this.http.get<InmuebleModel[]>(
  //     `${this.urlBase}producto?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`
  //   );
  // }

  listarRegistrosPaginados(pag: number): Observable<PaginadorInmuebleModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorInmuebleModel>(
      `${this.urlBase}inmuebles-paginado?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`
    );
  }

  AgregarRegistro(registro: InmuebleModel): Observable<InmuebleModel> {
    return this.http.post(`${this.urlBase}inmuebles`, registro);
  }

  EditarRegistro(registro: InmuebleModel): Observable<InmuebleModel> {
    return this.http.put(`${this.urlBase}inmueble/${registro._id}`, registro);
  }

  CargarArchivo(formData: FormData): Observable<ArchivoModel> {
    return this.http.post<ArchivoModel>(
      `${this.urlBase}cargar-archivo-inmueble`,
      formData
    );
  }

  BuscarRegistro(id: string): Observable<InmuebleModel> {
    return this.http.get<InmuebleModel>(`${this.urlBase}inmueble/${id}`);
  }

  EliminarRegistro(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}inmueble/${id}`);
  }
}
