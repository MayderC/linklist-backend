import { Response, Request, NextFunction } from "express";
import { verifyJWT } from "../helpers/jwt";

export const validateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("token");

  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const payload = verifyJWT(token);

  if (!payload) return res.status(401).json({ error: "Unauthorized" });

  req.body.id = payload.id;
  next();
};
