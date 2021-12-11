import {Request, Response} from 'express'
import Link from '../models/links.model'
import User from '../models/user.model'

export const insertLink = (req : Request, res : Response) => {

  const {id, name, link} = req.body

  const link_to_save = new Link({name, link})

  link_to_save.save().then(async(resp) => {

    try {
      const user = await User.findByIdAndUpdate(id, {$push : {'links': resp}})
      res.send({link: resp})
    } catch (error) {
      
    }

  })
}

export const deleteLink = async(req : Request, res : Response) => {
  const {id, linkID} = req.body


  const linkResult = await Link.findById(linkID)
  if(!linkResult){
    return res.send({msg : "not have result"})
  }

  try {
    const linkDeleted = await Link.findByIdAndDelete(linkResult.id)
    await User.findByIdAndUpdate(id, {$pull : {'links' : linkResult.id}})
    return res.send({link : linkDeleted})
  } catch (error) {
    return res.send({msg : "error deleting link"})
  }
}

export const listLink = async(req: Request, res : Response)=>{

  const id_user = req.body.id
  try {
    const result = await User.findById(id_user).populate('links').exec()
    if(!result){return res.send({msg : "Error en la consulta"})}
    const {id, username, email, links} = result

    res.send({user :{id, username, email, links}})
  } catch (error) {
    res.send({msg : "Error en la consulta"})
  }
}
// controlador publico, se obtiene los links de un usuario, parametro por url
export const userLinks = async(req: Request, res: Response) =>{

  const name = req.params.name

  if(!name){res.send({msg: "error, params user"})}

  try {
    const result = await User.findOne({username : name}).populate('links').exec()
    if(!result){return res.send({msg : "Error en la consulta"})}
    const {id, username, email, links} = result

    res.send({links :links})
  } catch (error) {
    res.send({msg : "Error en la consulta"})
  }
}
