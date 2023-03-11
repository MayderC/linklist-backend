import { Request, Response } from "express";
import { signJWT } from "../helpers/jwt";
import bcrypt from "bcrypt";
import User from "../../database/models/user.model";

import { AuthService } from "./../../../Adapters/Services/AuthService";

export class AuthController {
  private readonly _authService: AuthService;

  constructor(authService: AuthService) {
    this._authService = authService;
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const result = await this._authService.login(email, password);
      const token = await signJWT(result.id);
      return res.json({
        token: token,
        user: result.username,
        links: result.links,
      });
    } catch (error) {
      return res.send({ error: "The credentials are incorrects" });
    }
  }

  async register(req: Request, res: Response) {
    const { username, email, password, membership, rol } = req.body;

    const salt = 10;
    const passHasehd = await bcrypt.hash(password, salt);

    const user_to_save = new User({ username, email, password: passHasehd });

    user_to_save
      .save()
      .then(async (resp) => {
        const token = await signJWT(resp.id.toString());
        return res.json({ token, user: resp.username });
      })

      .catch((err) => {
        console.log(err);
        res.send({ error: "Error" });
      });
  }
}
