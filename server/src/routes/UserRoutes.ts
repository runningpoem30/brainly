import express from "express";
import { Router } from "express";
const userRoutes = Router()
const app = express();
import { signUp } from "../controllers/UserController";


userRoutes.post('/signup' ,  signUp)

//userRoutes.post('/signin' , )



export default userRoutes