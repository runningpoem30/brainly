import { ContentModel } from "../models/ContentModel";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary'
import { uploadToCloudinary } from "../services/CloudinaryService";

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
        const title = req.body;
        const image = (req as any).file; 
        console.log(image)
        
        const titleExists = await ContentModel.find({title : title})

        if(!titleExists){
            return res.status(400).json({
                message : "the memory doesnt exist , please create new "
            })
        }
            if (!image) {
                return res.status(400).json({
                    success: false,
                    error: true,
                    message: "No file uploaded",
            });
        }

        const result:any = await uploadToCloudinary(image.buffer);

        const updatedContent = await ContentModel.findOneAndUpdate({
            title : title , userId : userId
        }, {
            $addToSet : {link : result.secure_url }
         },
        {
         new : true
         })
       
         res.status(200).json({
            success : true , 
            data : updatedContent , 
            message : "this is the updated memory"
         })
        
        // firstly the user is on the website 
        // he should be able to add images in a particular memory
        // how does he fetch the specific memory 
        // the user might get the memory by searching for a specific memory , in that case it becomes easy we can send that in the body , but what if he clicks on a memory , and then inside there is a button , and he presses that button and we need to fetch that memory's specific id ; how do we do this  in that case we need to fetch his id 
        // but even when he searches for something , how will the request go ? like alright i cant send both the things at once , how wil that be handled on the frontend ? 
        // and then we get the memory id 
        // we also need to get the image link that needs to be saved 
        // and then we push that link in that memory 
        // and then it gets saved 


        // but lets say the user is already inside a memory , how do we fetch the memory's id ? 
        // and then we should be able to add 
        // also the user might get the memory by searching for a specific memory 
    }
    catch(err){
        res.status(200).json({
            error : true , 
            success : false ,
            message : "failed to add image in the memory"
        })
    }
}