import { Router } from "express";
import { login, register } from '../controllers/auth'
import {check} from 'express-validator'
import validation from "../middlewares/validationResult";
const router = Router();

router.post('/login',[
  check('email').notEmpty().withMessage({message : 'Please enter your email', errorCode : 1}),
  check('email').isEmail().withMessage({message : 'Format incorrect', errorCode : 1}),
  check('password').notEmpty().withMessage({message: 'Please enter you password',errorCode: 1}),
  check('password').isLength({ min: 6 }).withMessage({message: 'The password must be 6 charts long', errorCode: 1}),
  validation
], login);

router.post('/register',[
  check('username').notEmpty().withMessage({message : 'Please enter your username'}),
  check('email').notEmpty().withMessage({message : 'Please enter your email', errorCode : 1}),
  check('email').isEmail().withMessage({message : 'Format incorrect', errorCode : 1}),
  check('password').notEmpty().withMessage({message: 'Please enter you password',errorCode: 1}),
  check('password').isLength({ min: 6 }).withMessage({message: 'The password must be 6 charts long', errorCode: 1}),
  validation
], register);


export default {router};


