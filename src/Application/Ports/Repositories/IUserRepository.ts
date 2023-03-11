import { IGenericRepository } from "./IGenericRepository";
import { IUser } from "./../../Entities/Pojo/IUser";

export interface IUserRepository<T> extends IGenericRepository<T> {
  getByemail(): Promise<IUser>;
  getByUsername(): Promise<IUser>;
}
