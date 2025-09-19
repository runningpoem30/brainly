import { timeStamp } from "console";
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
        required : false
    },
    password : { 
        tpe : String
    },
    isVerified : {
        type : Boolean ,
        default : false
    },
    onBoarded : {
        type : Boolean , 
        default : false
    },
},{
    timestamps : true,
}
)

export const UserModel =  mongoose.model("User" , userSchema);




