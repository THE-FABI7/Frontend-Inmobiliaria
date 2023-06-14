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
  /**
   * Sends an HTTP GET request to the server to retrieve a list of properties.
   * @returns {Observable<any>} An observable that will emit the response from the server.
   */
  ObtenerInmuebles() {
    return this.http.get(`${this.urlBase}inmuebles`);
  }

  /**
   * Retrieves a list of InmuebleModel objects from the server.
   * @returns {Observable<InmuebleModel[]>} - An observable that resolves to an array of InmuebleModel objects.
   */
  listarRegistros(): Observable<InmuebleModel[]> {
    return this.http.get<InmuebleModel[]>(
      `${this.urlBase}inmuebles?filter={"limit":${ConfiguracionPaginacion.registrosPorPagina}}`
    );
  }

  /**
   * Retrieves a paginated list of InmuebleModel objects from the server.
   * @param {number} pag - The page number to retrieve.
   * @returns {Observable<PaginadorInmuebleModel>} - An observable that resolves to a PaginadorInmuebleModel object.
   */
  listarRegistrosPaginados(pag: number): Observable<PaginadorInmuebleModel> {
    let limit = ConfiguracionPaginacion.registrosPorPagina;
    let skip = (pag - 1) * limit;
  /**
   * Sends a POST request to the server to add a new property to the database.
   * @param {InmuebleModel} registro - The property object to add to the database.
   * @returns {Observable<InmuebleModel>} - An observable that resolves to the added property object.
   */
    return this.http.get<PaginadorInmuebleModel>(
      `${this.urlBase}inmuebles-paginado?filter={"limit":${limit}, "skip":${skip}, "order":"id DESC"}`
    );
  }
  /**
   * Sends a PUT request to the server to update an existing InmuebleModel record.
   * @param {InmuebleModel} registro - The InmuebleModel record to update.
   * @returns {Observable<InmuebleModel>} - An observable that resolves to the updated InmuebleModel record.
   */

  AgregarRegistro(registro: InmuebleModel): Observable<InmuebleModel> {
    return this.http.post(`${this.urlBase}inmuebles`, registro);
  }
  /**
   * Sends a POST request to the server to upload a file.
   * @param {FormData} formData - The form data containing the file to upload.
   * @returns {Observable<ArchivoModel>} - An observable that resolves to the uploaded file's metadata.
   */

  EditarRegistro(registro: InmuebleModel): Observable<InmuebleModel> {
    return this.http.put(`${this.urlBase}inmuebles/${registro._id}`, registro);
  }

  CargarArchivo(formData: FormData): Observable<ArchivoModel> {
    return this.http.post<ArchivoModel>(
      `${this.urlBase}cargar-archivo-inmueble`,
      formData
    );
  }

  /**
   * Retrieves an observable of an InmuebleModel object from the server with the given id.
   * @param {string} id - The id of the InmuebleModel object to retrieve.
   * @returns {Observable<InmuebleModel>} - An observable of the InmuebleModel object.
   */
  BuscarRegistro(id: string): Observable<InmuebleModel> {
    return this.http.get<InmuebleModel>(`${this.urlBase}inmuebles/${id}`);
  }

  /**
   * Sends a DELETE request to the server to delete a record with the given ID.
   * @param {string} id - The ID of the record to delete.
   * @returns {Observable<any>} An observable that resolves with the response from the server.
   */
  EliminarRegistro(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}inmuebles/${id}`);
  }
}
