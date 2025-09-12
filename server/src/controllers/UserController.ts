import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt"
import {success, z} from "zod"
import { Request , Response } from "express";
import { error } from "console";

export async function signUp(req : Request , res : Response ){

 try {
         const requiredBody = z.object({
        email : z.email(),
        username : z.string().min(6 , "Username must be atleast 6 characters long"),
        password : z.string()
        .min(8 , "Password must be atleast 8 characters long")
        .regex(/[A-Z]/ , "Password must contain atleast one upper case" )
        .regex(/[a-z]/ , "Password must contain atleast one lower case")
        .regex(/[])
    })

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

   res.status(200).json({
    success : true ,
    error : false ,
    message : "user successfully signed up "
   });
 }
 catch(err){
    res.status(400).json({
        message : err
    })
 }

   
}

