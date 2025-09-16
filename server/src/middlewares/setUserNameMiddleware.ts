import {Request , Response , NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import express from "express"
const app = express()


app.use(cookieParser())

export async function setUserNameMiddleware(req: Request, res: Response, next: NextFunction) {
  let token: string | undefined;

  //console.log(req.cookies)
  const authHeader = req.headers.authorization;
  console.log(authHeader)
  //console.log(req.headers)

  if (req.cookies?.access_token) {
    token = req.cookies.access_token;
  } 
  else if (req.headers.authorization) {
    token = authHeader;
  }

  console.log(token)

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  


  const secretKey = process.env.ACCESS_TOKEN_KEY as string
  try{
    const decoded = jwt.verify(token , secretKey) as JwtPayload
    (req as any).userId = decoded.userId

    next();
  }
  catch(err){
    return res.status(401).json({message : "invalid or expired token"})
  }

  }


