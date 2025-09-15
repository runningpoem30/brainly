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


    // if the title already exists , push the link in that document 
    // if it does not , create a new title and push then push the link 

     
    const content = await ContentModel.findOneAndUpdate(
        {title : title , userId : userId},
        {
            $addToSet : {link : link}
        },
        {upsert : true , new : true}
    )





    // const memory = await ContentModel.create({
    //     title : title , 
    //     link : link ,
    //     userId : userId
    // })

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


export async function getMemory(req:Request , res : Response){
    try{
        const userId  = (req as any).userId

        const content = await ContentModel.find({userId}).populate("userId"  , "username")

        res.status(200).json({
            success : true  , 
            message : "successfully fetched all the content",
            data : content
        })

    }

    catch(err){
        res.status(400).json({
            message : "error getting your memories"
        })
    }
}


// also getting a specific memory 
// deleting a memory 


export async function addImages(req : Request , res: Response){
    try{
        const userId = (req as any).userId;

    }
    catch(err){

    }
}