
import { Router } from "express";
const userRoutes = Router()
import { signUp } from "../controllers/UserController";


userRoutes.post('/signup' ,  signUp)

//userRoutes.post('/signin' , )



export default userRoutes