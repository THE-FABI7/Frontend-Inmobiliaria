/**
 * Represents a contact message sent through the website's contact form.
 * @class
 * @property {string} [_id] - The unique identifier of the contact message.
 * @property {string} [mensaje] - The message content.
 * @property {string} [tipoMensaje] - The type of message (e.g. question, feedback, etc.).
 * @property {string} [nombreCompleto] - The name of the person who sent the message.
 * @property {string} [correo] - The email address of the person who sent the message.
 * @property {string} [celular] - The phone number of the person who sent the message.
 */
export class contactoModel {
  _id?: string;
  mensaje?: string;
  tipoMensaje?: string;
  nombreCompleto?: string;
  correo?: string;
  celular?: string;
}