import { ShareModel } from "../models/ShareModel";
import { Request , Response } from "express";
import { random } from "../utils/shareUtil";

export async function shareMemory(req : Request , res : Response){
    try{
        const userId = (req as any).userId
        const share = req.body.share;
        if(share){
           await ShareModel.create({
                userId : userId,
                contentId : (req as any).params,
                hash : random(10)
            })
        }
        else {
            await ShareModel.deleteOne({
                userId : userId
            })
        }

        res.status(200).json({
            success : true , 
            message : "updated share"
        })
    }
    catch{

    }
}