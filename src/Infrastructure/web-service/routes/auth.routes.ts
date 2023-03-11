import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import {
  loginValidations as loginMiddle,
  registerValidations as registerMiddle,
} from "../middlewares/auth/validations-auth";

export class AuthRouter {
  private readonly _authController: AuthController;
  private _router: Router;

  constructor(authController: AuthController) {
    this._authController = authController;
    this._router = Router();
  }

  loadAuth() {
    this._router.post(
      "/login",
      loginMiddle,
      this._authController.login.bind(this._authController)
    );
    this._router.post(
      "/register",
      registerMiddle,
      this._authController.register.bind(this._authController)
    );
    return this._router;
  }
}
