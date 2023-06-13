/**
 * Represents a model for a real estate property.
 * @class
 * @property {string} [_id] - The ID of the property.
 * @property {string} [nombre] - The name of the property.
 * @property {string} [foto] - The URL of the property's photo.
 * @property {number} [precioVenta] - The sale price of the property.
 * @property {number} [precioAlquiler] - The rental price of the property.
 * @property {string} [estado] - The state of the property.
 * @property {string} [asesorId] - The ID of the real estate agent associated with the property.
 * @property {string} [
 */
export class InmuebleModel {
  _id?: string;
  nombre?: string;
  foto?: string;
  precioVenta?: number;
  precioAlquiler?: number;
  estado?: string;
  asesorId?: string;
  solicitudId?: string;
  ciudadId?: string;
}
