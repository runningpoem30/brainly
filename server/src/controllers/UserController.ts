import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt"

async function signUp(req : any  ,res : any ){


    //doing the zod validation , hashing the password
    const {email , username , password } = req.body

    const hashedPassword = bcrypt.hash(password , 10)
    
   const newUser  = await UserModel.create({
      email :  email  , username : username , password : hashedPassword
   })
}