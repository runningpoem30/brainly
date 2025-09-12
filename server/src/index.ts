import express from "express"; 
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { connectDatabase } from "./database";
import userRoutes from "./routes/UserRoutes";
import { connect } from "http2";
const PORT = 8000;


const app = express();

app.use('/api/v1/user/' , userRoutes)
app.get('/' , () => {
    console.log("the server is listening on the port");
})



// twitter link , youtube video links , blogs
// wants to query the knowledge base  - what is trump's instance on h1b 
// among the thosand of entries
// it will send it to http and it will send to gpt . 
// you can get the context from the knowledge base 
// assume the full contents of the tweeti. stored over there 

// now how do you find the relevant tweets 
// how do i find the top 5 more relevant tweets 
// vector databases embeddings
// 500 iitjee problems 



app.listen(PORT , () => {
    connectDatabase();
    console.log(`server is running on port ${PORT}`)
})