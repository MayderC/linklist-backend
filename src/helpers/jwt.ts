import jwt from 'jsonwebtoken'
const KEY : string = process.env.KEYWORD_JWT || 'SECRET'


export const signJWT = (id: string)=>{
  const payload = {id : id}
  return new Promise<string>((resolve,reject) =>{
    jwt.sign( payload, KEY, { expiresIn:  "3h"},function(err, token) {
      if(err) {reject(err)}
      if(token) {resolve(token)}
    });
  })
}

export const verifyJWT  = (token : string): any => {
  try {
    const  decoded  = jwt.verify(token, KEY);
    return decoded
  } catch(err) {
    return false
  }
}


