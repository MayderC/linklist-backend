import express from "express";
import { LinksController } from "../controllers/LinksController";
import { linksValidations } from "../middlewares/links/validate-links";
import { validateJWT } from "../middlewares/validate-jwt";
const router = express.Router();

export class LinksRouter {
  private readonly _linksController: LinksController;
  constructor(linksController: LinksController) {
    this._linksController = linksController;
  }

  links() {
    router.post(
      "/",
      [validateJWT, ...linksValidations],
      this._linksController.insertLink
    );
    router.delete("/", [validateJWT], this._linksController.deleteLink);
    router.get("/", [validateJWT], this._linksController.listLink);
    router.get("/user/:name", this._linksController.userLinks);
    return router;
  }
}
