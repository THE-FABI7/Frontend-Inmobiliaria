/**
 * Represents a client model with optional properties.
 * @class
 * @property {string} [_id] - The ID of the client.
 * @property {string} [name] - The name of the client.
 * @property {string} [phoneNumber] - The phone number of the client.
 * @property {string} [emailAddress] - The email address of the client.
 * @property {string} [paymentMethod] - The payment method of the client.
 * @property {string} [personaId] - The persona ID of the client.
 */
export class ClienteModel {
  _id?: string;
  name?: string;
  phoneNumber?: string;
  emailAddress?: string;
  paymentMethod?: string;
  personaId?: string;
}
