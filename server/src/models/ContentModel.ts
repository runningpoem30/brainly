import mongoose, { Schema } from "mongoose";

const ContentSchema = new Schema({
    title : String , 
    link : [String] , 
    tags : [{type : mongoose.Types.ObjectId , ref:'Tag'}],
    userId : {type : mongoose.Types.ObjectId , ref:'User' , required : true}
},{
    timestamps : {
        createdAt : 'addedAt',
        updatedAt : 'modifiedAt'
    }
})


export const ContentModel = mongoose.model('ContentModel' , ContentSchema)