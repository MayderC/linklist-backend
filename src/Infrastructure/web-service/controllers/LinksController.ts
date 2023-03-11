import { Request, Response } from "express";
import Link from "../../database/models/links.model";
import User from "../../database/models/user.model";

export class LinksController {
  async insertLink(req: Request, res: Response) {
    const { id, name, link, backgroundColor } = req.body;

    const link_to_save = new Link({ name, link, backgroundColor });

    link_to_save.save().then(async (resp) => {
      try {
        const user = await User.findByIdAndUpdate(id, {
          $push: { links: resp },
        });
        res.send({ link: resp });
      } catch (error) {}
    });
  }

  async deleteLink(req: Request, res: Response) {
    const { id, linkID } = req.body;

    const linkResult = await Link.findById(linkID);
    if (!linkResult) {
      return res.send({ msg: "not have result" });
    }

    try {
      const linkDeleted = await Link.findByIdAndDelete(linkResult.id);
      await User.findByIdAndUpdate(id, { $pull: { links: linkResult.id } });
      return res.send({ link: linkDeleted });
    } catch (error) {
      return res.send({ msg: "error deleting link" });
    }
  }

  async listLink(req: Request, res: Response) {
    const id_user = req.body.id;
    try {
      const result = await User.findById(id_user).populate("links").exec();
      if (!result) {
        return res.send({ msg: "Error en la consulta" });
      }
      const { id, username, email, links } = result;

      res.send({ user: { id, username, email, links } });
    } catch (error) {
      res.send({ msg: "Error en la consulta" });
    }
  }
  // controlador publico, se obtiene los links de un usuario, parametro por url
  async userLinks(req: Request, res: Response) {
    const name = req.params.name;

    if (!name) {
      res.send({ msg: "error, params user" });
    }

    try {
      const result = await User.findOne({ username: name })
        .populate("links")
        .exec();
      if (!result) {
        return res.send({ msg: "Error en la consulta" });
      }
      const { id, username, email, links } = result;

      res.send({ links: links });
    } catch (error) {
      res.send({ msg: "Error en la consulta" });
    }
  }
}
