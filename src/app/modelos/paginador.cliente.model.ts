/**
 * A model representing a paginated list of clients.
 * @property {number} totalRegistros - The total number of client records.
 * @property {ClienteModel[]} registros - An array of client records.
 */
import { ClienteModel } from './cliente.model';
export class PaginadorClienteModel {
  totalRegistros: number=0;
  registros?: ClienteModel[]=[];
}
