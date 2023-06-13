/**
 * Represents a model for permissions.
 * @class
 * @property {string} [_id] - The ID of the permission.
 * @property {string} [guardar] - The permission to save.
 * @property {string} [editar] - The permission to edit.
 * @property {string} [eliminar] - The permission to delete.
 * @property {string} [listar] - The permission to list.
 * @property {string} [descargar] - The permission to download.
 * @property {string} [menuId] - The ID of the menu associated with the permission.
 */
export class permisosModel {
  _id?: string;
  guardar?: string;
  editar?: string;
  eliminar?: string;
  listar?: string;
  descargar?: string;
  menuId?: string;
}
