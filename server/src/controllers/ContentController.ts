import { ContentModel } from "../models/ContentModel";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary'
import { uploadToCloudinary } from "../services/CloudinaryService";

export async function createMemory(req : Request , res : Response){
 try{
    const userId = (req as any).userId;
    console.log('this is the user id ' +userId)

    if(!userId){
        return res.status(400).json({
            success : true , 
            message : "you are not verified"
        })
    }
    //alright this creates a new , but what if the user is inside of a particular content and wants to create a memory , for that we will fetch the contentId
    const contentId = req.params.contentId || (req.body.contentId as string) || undefined
    const { title , link } = req.body;

     if(!contentId && !title){
        return res.status(400).json({message : "please provide contentid or title"})
     }

       let content;
         if (contentId) {
         content = await ContentModel.findOne({ _id: contentId, userId });
        } else { 
         content = await ContentModel.findOne({ title, userId });
        }

     if (!content) {
      return res.status(404).json({ message: "Content not found for this user" });
       }
    

    const finalContent = await ContentModel.findByIdAndUpdate(
        content._id,
        {
            $addToSet : {link : link}
        },
        {upsert : true , new : true}
    )

    return res.status(200).json({
        success : true , 
        message : "successfully added the memory",
        data : finalContent
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
        if (!userId) return res.status(401).json({ message: "Unauthorized" });

        const contentId = req.params.contentId || (req.body.contentId as string) || undefined
        const title = (req.body.title as string) || undefined

        if(!contentId && !title){
            return res.status(400).json({message : "please provide contentid or title"})
        }
       
         const file = req.file;
         if (!file) {
         return res.status(400).json({ message: "No file uploaded. Use field name 'image'." });
         }


         let content;
         if (contentId) {
         content = await ContentModel.findOne({ _id: contentId, userId });
        } else { 
         content = await ContentModel.findOne({ title, userId });
        }

     if (!content) {
      return res.status(404).json({ message: "Content not found for this user" });
       }
      const result: any = await uploadToCloudinary(file.buffer);

    
     const updated = await ContentModel.findByIdAndUpdate(
      content._id,
      { $addToSet: { link: result.secure_url } }, // adjust `images` field to your schema
      { new: true }
    );

    return res.status(200).json({ success: true, data: updated });
    }
    catch(err){
        console.log(`this is what is causing the fucking error ${err}`)
        res.status(400).json({
            error : true , 
            success : false ,
            message : "failed to add image in the memory"
        })
    }
}

export async function deleteMemory(req : Request , res: Response){
    try{
        const userId = (req as any).userId;
        if(!userId){
            throw new Error("the user is not authenticated")
        }

        const contentId = req.params.contentId

        const deleteContent = await ContentModel.findByIdAndDelete(contentId)

        res.status(200).json({
            success : true ,
            message : "the memory is sucessfully deleted!"
        })
    }
    catch(err){
        res.status(400).json({
            success : false ,
            error : true ,
            message : "error deleting the body"
        })
    }
}

