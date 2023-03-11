import { createContainer, asClass, InjectionMode } from "awilix";
import { AwilixContainer } from "awilix/lib/container";
import { AuthController } from "../Infrastructure/web-service/controllers/AuthController";
import Server from "../Infrastructure/web-service/server/server";
import { LinksController } from "../Infrastructure/web-service/controllers/LinksController";
import { AuthRouter } from "./../Infrastructure/web-service/routes/auth.routes";
import { LinksRouter } from "../Infrastructure/web-service/routes/links.routes";
import { AuthService } from "../Adapters/Services/AuthService";
import { AuthRepository } from "../Adapters/Repostitories/AuthRepository";

export class DependencyContainer {
  private readonly _container: AwilixContainer;

  constructor() {
    this._container = createContainer({ injectionMode: InjectionMode.CLASSIC });
    this.repositories();
    this.services();
    this.controllers();
    this.routes();
    this.server();
  }

  get container(): AwilixContainer {
    return this._container;
  }

  server() {
    this._container.register({
      server: asClass(Server).singleton(),
    });
  }

  routes() {
    this._container.register({
      authRouter: asClass(AuthRouter).singleton(),
      linksRouter: asClass(LinksRouter).singleton(),
    });
  }
  services() {
    this._container.register({
      authService: asClass(AuthService).scoped(),
    });
  }

  controllers() {
    this._container.register({
      authController: asClass(AuthController).scoped(),
      linksController: asClass(LinksController).scoped(),
    });
  }

  repositories() {
    this._container.register({
      userRepository: asClass(AuthRepository).singleton(),
    });
  }
}
