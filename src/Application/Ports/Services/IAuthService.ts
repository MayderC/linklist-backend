import { IUserResponse } from "./../../../Adapters/Dtos/IUserResponse";

export interface IAuthService {
  login(email: string, password: string): Promise<IUserResponse>;
  register(): any;
}
