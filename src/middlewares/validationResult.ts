import { NextFunction } from "express";
import { validationResult } from 'express-validator'
import { Request, Response } from 'express';




const validation = (req: Request, res: Response, next : NextFunction) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    return res.json({ errors: result.array() });
  }
  next()
}

export default validation