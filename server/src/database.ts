import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose"
dotenv.config()

const mongodbUri  = process.env.MONGODB_URI as string

if(!mongodbUri){
    console.log("the uri is not correctly defined!")
}




export async function connectDatabase(){
    try{
        const connect = await mongoose.connect(mongodbUri)
        console.log("the database is successfully connected")
    }
    catch(err) {
        console.log(`this is the rror ${err}`)
        console.log("failed to connect to the database")
        
    }
}