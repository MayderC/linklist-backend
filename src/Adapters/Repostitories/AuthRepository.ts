import { GenericMongoRepository } from "./GenericMongoRepository";
import { IUser } from "../../Application/Entities/Pojo/IUser";
import User from "../../Infrastructure/database/models/user.model";

export class AuthRepository extends GenericMongoRepository<IUser> {
  async getByEmail(email: string): Promise<IUser> {
    const user = await User.findOne({ email: email }).populate("links").exec();
    if (!user) throw "Error";
    return user;
  }
}
