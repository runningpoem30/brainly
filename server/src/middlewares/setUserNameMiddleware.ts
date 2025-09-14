import {Request , Response , NextFunction} from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { configDotenv } from "dotenv";

async function setUserNameMiddleware(req: Request, res: Response, next: NextFunction) {
  let token: string | undefined;

  const authHeader = req.headers.authorization;

  if (req.cookies?.access_token) {
    token = req.cookies.access_token;
  } else if (typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

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


