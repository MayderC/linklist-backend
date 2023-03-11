import { ILinks } from "./ILinks";
export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  membership: unknown;
  rol: unknown;
  links: Array<ILinks>;
}
