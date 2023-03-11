import User from "../../../database/models/user.model";

import jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

const verifyEmail = (req: Request, res: Response) => {};

export const verifyUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;

  const user = await User.findOne({ username: username });

  if (!user) {
    return res.send({ msg: "Usuario no valido" });
  }

  next();
};
