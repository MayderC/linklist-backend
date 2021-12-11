import {Response, Request, NextFunction} from 'express'
import {verifyJWT} from '../helpers/jwt'

export const validateJWT = (req: Request, res: Response, next: NextFunction) =>{
  const token = req.header('token') || ""
  
  if(token.length > 0){

    const payload = verifyJWT(token)
    if(payload){

      req.body.id = payload.id 
      next();
      return

    }else{return res.status(401).json({error: "Unauthorized"})}
  }else{return res.status(401).json({error: "Unauthorized"})}
}