import {Request , Response , NextFunction} from "express"

async function setUserNameMiddleware(req: Request , res : Response , next : NextFunction){
    let token ; 

    if(req.cookies?.)
}