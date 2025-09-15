import { UserModel } from "../models/UserModel";
import bcrypt from "bcrypt"
import {object, string, success, z} from "zod"
import { Request , Response } from "express";
import { error } from "console";
import { sendMail } from "../services/EmailServices";
import {OAuth2Client} from "google-auth-library"
import { configDotenv } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"

const app = express()
app.use(cookieParser())

import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
import { required } from "zod/v4/core/util.cjs";
import { isObjectIdOrHexString } from "mongoose";
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

  const url = `${process.env.FRONTEND_URL}/api/v1/user/verify/${newUser._id}/${verificationToken}`

  await sendMail(email , "Please check your email" , url)

   res.status(200).json({
    success : true ,
    error : false ,
    message : "user successfully signed up . please check your email",
    token : verificationToken
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
      { expiresIn: "15m" }
    ) 

    res.cookie("access_token" , verificationToken , {
        httpOnly : true ,
        maxAge : 15 * 60 * 1000
    })
 
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

//adding the userNameField after google auth 
export async function googleAuthUsernameAdd(req : Request , res:Response){
    try{
        const { userId } = (req as any).userId;
        if(!userId){
            return res.status(404).json({
                succes : false , 
                message  : "please provide token"
            })
        }

        const user = await UserModel.findOne({id : userId})
        if(!user){
            return res.status(404).json({message : "user not found"})
        }
        const requiredBody = z.object({
            username : z.string().min(6)
        })


        const parsed = await requiredBody.safeParse(req.body);

     if(!parsed.success){
      return res.status(400).json({
        message : "Error Signing up the user" , 
        errors : parsed.error.format()
      })
    }
    const {username} = parsed.data
    const updatedUser = await UserModel.updateOne({userId,
        username : username,
        isVerified : true ,
        onBoarded : true
    })

    const secret = process.env.ACCESS_TOKEN_KEY
    if(!secret){
        throw new Error("jwt environment vairable is not defined")
    }

    const verificationToken = jwt.sign(
      { userId: user._id },
       secret,
      { expiresIn: "30d" }
    ) 

    res.cookie("access_token" , verificationToken , {
        httpOnly : true ,
    })

   return res.status(200).json({
    success: true , 
    message : "user updated successfully" , 
    user : updatedUser
   })

    }
    catch(err){
        res.status(403).send({
            success : false , 
            message : "error adding username"
        })
    }
}


export async function verifyUser(req : Request, res : Response){
    try{
        const {id , token} = req.params

        const user = await UserModel.findById(id)
        if(!user){
            return res.status(400).json({
                message : "the user does not exist",
                success : false
            })
        }

        const secretKey = process.env.ACCESS_TOKEN_KEY as string
        const verify = await jwt.verify(token , secretKey) as JwtPayload

        if(!verify){
           return res.status(404).json({
            message : " the user is not verified"
           })
        }

        const updateUser = await UserModel.findByIdAndUpdate(id, {isVerified : true , onBoarded : true})



        res.status(200).json({
            success: true , 
            message : "user is verified, please proceed to login page"
            
        })

    }
    catch(err){
        return res.status(400).json({
            message : "error verifying user "
        })
    }
}


export async function signIn(req : Request , res : Response){
    try{
        const { password , email } = req.body;

        const user:any = await UserModel.findOne({email});

        const checkPassword = await bcrypt.compare(password , user.password)
  
        if (!checkPassword) {
          return res.status(400).json({ message: "Invalid Credentials" });
        }


        if(!user){
            res.status(200).json({
                message : "cannot find the user"
            })
        }

        console.log(user._id)
        
        
        const secret = process.env.ACCESS_TOKEN_KEY as string
        if(!secret){
            return res.status(400).json({
                message : "incorrect key"
            })
        }

      const verificationToken = jwt.sign(
          { userId: user._id},
           secret,
         { expiresIn: "15d" }
       );

       
    res.cookie("access_token" , verificationToken , {
        httpOnly : true ,
        maxAge : 15 * 60 *  60 * 1000
    })


    localStorage.setItem('access_token' , verificationToken)


    return res.status(200).json({
        success : true , 
        message : "User successfully logged in",
        access_token : verificationToken
    }) 

    }
    catch(err){
        console.log(err)
        res.status(400).json({
            message : "Invalid credentials",
            error  : err
        })
    }
}



// get the user profile 
// updating the profile - putting avatar 
// logging out 
// refresh tokens  
// 


/// i wont fucking open chat gpt in this entire projectdddd