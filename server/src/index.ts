import express from "express"; 
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { connectDatabase } from "./database";

jwt.generate()


const app = express()


app.get('/' , () => {
    console.log("the server is listening on the port")
})



app.listen('/home' , (req:any , res:any) =>  () => any{
    connectDatabase();
    res.send
})




