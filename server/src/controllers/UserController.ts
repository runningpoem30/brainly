import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt"
import zod from "zod"

async function signUp(req : any  ,res : any ){


    //doing the zod validation , hashing the password

    
    const {email , username , password } = req.body
    const hashedPassword = bcrypt.hash(password , 10)
    


    //we are learning about the input validation 
   const newUser  = await UserModel.create({
      email :  email  , username : username , password : hashedPassword
   })
}