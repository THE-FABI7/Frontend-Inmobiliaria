import { permisosModel } from './permisos.model';
import { usuarioModel } from './usuario.model';

/**
 * Represents a validated user model with a user object, token string, and menu permissions.
 */
export class usuarioValidadoModel {
  user?: usuarioModel;
  token?: string = "";
  menu: permisosModel[] = []
}
