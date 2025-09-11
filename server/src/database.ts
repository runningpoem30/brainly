
mongodb+srv://aryaanandpathak30_db_user:QEK5oAPeniMSPj6J@cluster0.gmevhkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

const mongodbUri : any = process.env.MONGODB_URI


export async function connectDatabase(){
    try{
        const connect = await mongoose.connect(mongodbUri)
        console.log("the database is successfully connected")
    }
    catch {
        console.log("failed to connect to the database")
    }
}