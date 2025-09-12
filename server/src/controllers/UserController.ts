import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt"
import {string, success, z} from "zod"
import { Request , Response } from "express";
import { error } from "console";
import { sendMail } from "../services/EmailServices";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export async function signUp(req : Request , res : Response ){
 try {
        const requiredBody = z.object({
        email : z.email(),
        username : z.string().min(6 , "Username must be atleast 6 characters long"),
        password : z.string()
        .min(8 , "Password must be atleast 8 characters long")
        .regex(/[A-Z]/ , "Password must contain atleast one upper case" )
        .regex(/[a-z]/ , "Password must contain atleast one lower case")
        .regex(/[^A-Za-z0-9]/ , "Password. must contain atleast one special charcter")
    })
    const parsed = requiredBody.safeParse(req.body);
    if(!parsed.success){
     return res.status(400).json({
        message : "Error Signing up the user" , 
        errors : parsed.error.format()
      })
    }
    const {email , username , password } = parsed.data
    const user = await UserModel.findOne({email})


   if(user){
    return res.status(400).send({success : false , message : "user already exists"})
   }
    const hashedPassword = await  bcrypt.hash(password , 10)
 
   const newUser  = await UserModel.create({
      email :  email  , username : username , password : hashedPassword
   })
   console.log(process.env.ACCESS_TOKEN_KEY)

    const secret = process.env.ACCESS_TOKEN_KEY
    if(!secret){
        throw new Error("jwt environment vairable is not defined")
    }

    const verificationToken = jwt.sign(
      { userId: newUser._id },
       secret,
      { expiresIn: "15m" }
    );

  const url = `${process.env.FRONTEND_URL}/api/v1/user/verify/${verificationToken}`

  await sendMail(email , "Please check your email" , url)

   res.status(200).json({
    success : true ,
    error : false ,
    message : "user successfully signed up . please check your email"
   });
 }
 catch(err){
    res.status(400).json({
       message : 'Error Signing up the user',
       error : err
    })
 }
}




export async function signIn(req : Request , res : Response){
    try{
        const { username , password , email } = req.body;

    }
    catch(err){
        res.status(400).json({
            message : "Invalid credentials"
        })
    }
}

