import mongoose from "mongoose";

const ShareSchema = new mongoose.Schema({
        hash : String,
        userId : {type : mongoose.Types.ObjectId , ref : 'User' , required : true}
})

const ShareModel = mongoose.model("ShareModel"  , ShareSchema)