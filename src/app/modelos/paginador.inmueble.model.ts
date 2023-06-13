import { InmuebleModel } from './inmueble.model';
/**
 * A model class representing a paginated list of InmuebleModel objects.
 * @property {number} totalRegistros - The total number of records in the paginated list.
 * @property {InmuebleModel[] | undefined} registros - An array of InmuebleModel objects representing the current page of records.
 */
export class PaginadorInmuebleModel {
  totalRegistros: number = 0;
  registros?: InmuebleModel[] = [];
}
