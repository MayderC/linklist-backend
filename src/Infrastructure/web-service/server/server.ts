import cors from "cors";
import express from "express";

import conection from "../../database/database";
import { AuthRouter } from "../routes/auth.routes";
import { LinksRouter } from "../routes/links.routes";

class Server {
  private port: number | string;
  private app: express.Application;
  private _authRouter: AuthRouter;
  private _linksRouter: LinksRouter;

  constructor(authRouter: AuthRouter, linksRouter: LinksRouter) {
    this.port = process.env.PORT || 3000;
    this.app = express();
    this._authRouter = authRouter;
    this._linksRouter = linksRouter;
    this.conexion();
    this.loadMiddlewares();
    this.loadRoutes();
  }
  loadMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  conexion() {
    conection();
  }

  loadRoutes() {
    this.app.use("/api/auth", this._authRouter.loadAuth());
    this.app.use("/api/link", this._linksRouter.links());
  }

  start() {
    this.app.listen(this.port, () => console.log(`listen on ${this.port}`));
  }
}

export default Server;
