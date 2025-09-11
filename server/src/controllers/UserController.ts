import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt"
import {z} from "zod"

async function signUp(req : any  ,res : any ){


    //doing the zod validation , hashing the password
    

    // it should be an object 
    // email should be a string , password should be a string , username should be a string
    

    const requiredBody = z.object({
        email : z.string().email(),
        username : z.string(),
        password : z.string().min(8)
    })

    // parsing the data 

    const {success , error} = requiredBody.safeParse(req.body)
    if(!success){
      res.json({
        message : "incorrect format"
      })
    }
    
    const {email , username , password } = req.body
    const hashedPassword = await  bcrypt.hash(password , 10)
    


    //we are learning about the input validation 
   const newUser  = await UserModel.create({
      email :  email  , username : username , password : hashedPassword
   })
}

