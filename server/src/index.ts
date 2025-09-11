import express from "express"; 
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { connectDatabase } from "./database";
import { connect } from "http2";
const PORT = 8000;


const app = express();


app.get('/' , () => {
    console.log("the server is listening on the port");
})




app.listen(PORT , () => {
    connectDatabase();
    console.log(`server is running on port ${PORT}`)
})