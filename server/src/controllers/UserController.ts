import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt"
import {string, success, z} from "zod"
import { Request , Response } from "express";
import { error } from "console";
import { sendMail } from "../services/EmailServices";
import {OAuth2Client} from "google-auth-library"
import { configDotenv } from "dotenv";
import cors from "cors"

import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const client = new OAuth2Client(process.env.CLIENT_ID);


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


///adding the google Auth signup here 
export async function googleAuth(req : Request , res : Response){
    try {
        const {token} = req.body;

        const ticket = await client.verifyIdToken({
            idToken : token,
            audience : process.env.CLIENT_ID
        })

        const payload = ticket.getPayload();

        if(!payload) return res.status(400).json({message : "invalid token"});

        const email = payload.email;

        let user = await UserModel.findOne({email})

        if(!user){
            user = await UserModel.create({
                email : email ,
                password : null
            })
        }


    const secret = process.env.ACCESS_TOKEN_KEY
    if(!secret){
        throw new Error("jwt environment vairable is not defined")
    }

    const verificationToken = jwt.sign(
      { userId: user._id },
       secret,
      { expiresIn: "7d" }
    ) 

    res.status(200).json({
        success : true ,
        token : verificationToken , 
        message : 'Successfully signed up the user'
    })
    }
    catch{
        return res.status(403).json({
            success : false ,
            message : "Error creating user"
        })
    }
}




export async function googleAuthUsernameAdd(req : Request , res:Response){
    try{

    }
    catch(err){
        res.status(403).send({
            success : false , 
            message : "error adding username"
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

