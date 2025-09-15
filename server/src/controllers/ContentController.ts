import { ContentModel } from "../models/ContentModel";
import { Request, Response } from "express";
import mongoose from "mongoose";

export async function createMemory(req : Request , res : Response){
 try{
    const { title , link } = req.body;
    const userId = (req as any).userId;
    console.log('this is the user id ' +userId)

    if(!userId){
        return res.status(400).json({
            success : true , 
            message : "you are not verified"
        })
    }

    const content = await ContentModel.findOneAndUpdate(
        {title : title , userId : userId},
        {
            $addToSet : {link : link}
        },
        {upsert : true , new : true}
    )

    return res.status(200).json({
        success : true , 
        message : "successfully added the memory",
        data : content
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

export async function getMemoryByTitle(req : Request , res:Response){
    try{
        const contentId = req.params.contentId
        console.log('tis is content id ' + contentId)
        const userId = (req as any).userId
        console.log('this is userid' , userId)

        const content = await ContentModel.find({
            _id : contentId , 
            userId : userId
        })

        console.log(content)


        res.status(200).json({
            success : true , 
            message : "successfully fetched the content",
            data : content
        })
    }

    catch(err){
       return res.status(400).json({
        success : false , 
        error : true ,
        message : "error getting the memory"
       })
    }
}

export async function getMemoryByTitleBySearch(req : Request , res : Response){
    try{
        const title = req.body.title;
        const userId = (req as any).userId


        const content = await ContentModel.find({
            title : title,
            userId : userId
        })

        res.status(200).json({
            message : "successfully fetched the content",
            data : content
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success : false , 
            error : true ,
            message : " error fetching the content "
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