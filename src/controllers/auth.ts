import { Request, Response } from 'express';
import { signJWT, verifyJWT } from '../helpers/jwt';
import  bcrypt  from 'bcrypt';
import User from '../models/user.model'





export const login = async(req: Request, res: Response) => {

  const {email, password} = req.body;

  const resultFind = await User.findOne({ email: email}).populate('links').exec()
  if(!resultFind) {
    return res.send({error : "The email or password are incorrect"})
  }

  bcrypt.compare(password, resultFind.password).then(async function(result) {
    if(result){
      const token = await signJWT(resultFind.id.toString())
      return res.json({token : token,  user : resultFind.username, links: resultFind.links})
    }
    return res.send({error : "The email or password are incorrect"})
});
}



export const register = async(req: Request, res: Response) => {

  
  const {username, email, password, membership, rol} = req.body
  
  const salt = 10
  const passHasehd = await bcrypt.hash(password, salt);

  const user_to_save = new User({username, email, password: passHasehd})


  user_to_save.save().then(async(resp) => {
    const token = await signJWT(resp.id.toString());
    return res.json({token, user : resp.username })
  })
  
  .catch(err => {
    console.log(err)
    res.send({error : "Error"})
  })
}


