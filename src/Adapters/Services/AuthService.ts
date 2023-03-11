import { IAuthService } from "./../../Application/Ports/Services/IAuthService";
import bcrypt from "bcrypt";
import { AuthRepository } from "../Repostitories/AuthRepository";
import { IUserResponse } from "./../Dtos/IUserResponse";

export class AuthService implements IAuthService {
  private readonly _userRepository: AuthRepository;

  constructor(userRepository: AuthRepository) {
    this._userRepository = userRepository;
  }

  async login(email: string, password: string): Promise<IUserResponse> {
    const user = await this._userRepository.getByEmail(email);
    const areEqueal = await bcrypt.compare(password, user.password);
    if (!areEqueal) throw "Error";
    return user;
  }

  register() {
    console.log("REGISTER");
  }
}
