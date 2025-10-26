import mongoose from "mongoose";

const ShareSchema = new mongoose.Schema({
        hash : String,
        userId : {type : mongoose.Types.ObjectId , ref : 'User' , required : true},
        contentId : {type : mongoose.Types.ObjectId , ref : 'ContentModel' , required : true , unique : true}
})

export const ShareModel = mongoose.model("ShareModel"  , ShareSchema)



