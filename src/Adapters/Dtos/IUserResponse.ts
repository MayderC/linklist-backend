import { IUser } from "./../../Application/Entities/Pojo/IUser";

export interface IUserResponse extends Omit<IUser, ""> {}
