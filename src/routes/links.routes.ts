import express from 'express';
import {insertLink, deleteLink, listLink, userLinks} from '../controllers/linksCrud'
import {validateJWT} from '../middlewares/validate-jwt';
const router = express.Router();
import {check} from 'express-validator'
import validation from "../middlewares/validationResult";


router.post('/',[validateJWT],[

  check('link').notEmpty().withMessage({message : 'Please enter your link', errorCode : 1}),
  check('link').isLength({ min: 12 }).withMessage({message: 'The link must be 12 charts long', errorCode: 1}),
  check('name').notEmpty().withMessage({message : 'Please enter link name', errorCode : 1}),
  check('name').isLength({ min: 6 }).withMessage({message: 'The name must be 6 charts long', errorCode: 1}),
  validation

], insertLink)
router.delete('/',[validateJWT], deleteLink)
router.get('/',[validateJWT], listLink)


router.get('/user/:name', userLinks)

export default {router}