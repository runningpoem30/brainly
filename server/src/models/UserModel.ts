import mongoose, { mongo } from "mongoose";

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
        required :true   
    }

})