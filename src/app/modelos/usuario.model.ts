/**
 * Represents a user in the system.
 * @class
 * @property {string} [_id] - The unique identifier of the user.
 * @property {string} [name] - The name of the user.
 * @property {string} [password] - The password of the user.
 * @property {string} [phoneNumber] - The phone number of the user.
 * @property {string} [emailAddress] - The email address of the user.
 * @property {string} [rolId] - The role ID of the user.
 */
export class usuarioModel {
  _id?: string;
  name?: string;
  password?: string;
  phoneNumber?: string;
  emailAddress?: string;
  rolId?: string;
}
