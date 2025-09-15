import { ContentModel } from "../models/ContentModel";
import { Request, Response } from "express";
import mongoose from "mongoose";

export async function createMemory(req : Request , res : Response){
 try{
    const { title , link } = req.body;
    const userId = (req as any).userId;

    if(!userId){
        return res.status(400).json({
            success : true , 
            message : "you are not verified"
        })
    }

    const memory = await ContentModel.create({
        title : title , 
        link : link ,
        userId : userId
    })

    return res.status(200).json({
        success : true , 
        message : "successfully added the memory"
    })
 }
 catch(err){
    return res.status(200).json({
        success : false ,
        error : true ,
        message  : "error adding memory "
    })
 }
}

export async function addImages(req : Request , res: Response){
    try{
        const userId = (req as any).userId;

    }
    catch(err){

    }
}