import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt"
import {z} from "zod"
import { Request , Response } from "express";

export async function signUp(req : Request , res : Response ){


    //doing the zod validation , hashing the password
    

    // it should be an object 
    // email should be a string , password should be a string , username should be a string
    

    const requiredBody = z.object({
        email : z.string().email(),
        username : z.string(),
        password : z.string().min(8)
    })

    // parsing the data 


    //validating
    const parsed = requiredBody.safeParse(req.body);
    if(!parsed.success){
     return res.json({
        message : "incorrect format" , 
        errors : parsed.error
      })
    }
    
    const {email , username , password } = parsed.data
    const hashedPassword = await  bcrypt.hash(password , 10)
    


    //we are learning about the input validation 
   const newUser  = await UserModel.create({
      email :  email  , username : username , password : hashedPassword
   })
}

