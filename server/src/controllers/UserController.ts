import { UserModel } from "../models/UserModel";


async function signUp(req : any  ,res : any ){

    const {email , username , password } = req.body
    
   const newUser  = await UserModel.create({
      email :  email  , username : username , password : password
   })
}