import express from 'express';
import {insertLink, deleteLink, listLink, userLinks} from '../controllers/linksCrud'
import {validateJWT} from '../middlewares/validate-jwt';
const router = express.Router();


router.post('/',[validateJWT], insertLink)
router.delete('/',[validateJWT], deleteLink)
router.get('/',[validateJWT], listLink)


router.get('/user/:name', userLinks)

export default {router}