
import { Router } from "express";
const userRoutes = Router()
import { signUp , googleAuth } from "../controllers/UserController";


userRoutes.post('/signup' ,  signUp)
userRoutes.post('/google-signup' , googleAuth)
//userRoutes.post('/signin' , )



export default userRoutes