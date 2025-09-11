import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String , 
        unique : true , 
        required : true
    },
    username :  {
        type : String , 
        unique : true , 
        required : true 
    },
    password : { 
        type : String
    }

})


export const UserModel =  mongoose.model("User" , userSchema);




