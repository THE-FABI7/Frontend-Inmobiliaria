import { Injectable } from '@angular/core';
import { configuracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginadorClienteModel } from '../modelos/paginador.cliente.model';
import { ConfiguracionPaginacion } from '../config/configuracion.paginacion';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  token= ""
  urlBase: string = configuracionRutasBackend.urlSeguridad;
  constructor(private http: HttpClient,private servicioSeguridad:SeguridadService) {
    this.token = this.servicioSeguridad.obtenerTokenLS()
  }

  listarRegistros(pag: number): Observable<PaginadorClienteModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
    let url = `${this.urlBase}clientes?filter={"limit":${limit},"skip":${skip}}`;
    return this.http.get<PaginadorClienteModel>(url);
    // {headers:{
    //     "Authorization":`Bearer ${this.token}`
    // }}
  }
}
