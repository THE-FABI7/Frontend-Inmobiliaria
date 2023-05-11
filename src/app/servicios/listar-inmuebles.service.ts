import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configuracionRutasBackend } from '../config/configuracion.rutas.backend';

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
}
