import { permisosModel } from './permisos.model';
import { usuarioModel } from './usuario.model';

export class usuarioValidadoModel {
  user?: usuarioModel;
  token?: string = "";
  // menu: permisosModel[] = []
}
