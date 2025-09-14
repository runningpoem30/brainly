
import { Router } from "express";
const userRoutes = Router()
import { signUp , googleAuth , verifyUser } from "../controllers/UserController";


userRoutes.post('/signup' ,  signUp)
userRoutes.post('/google-signup' , googleAuth)
userRoutes.get('/verify/:id/:token' , verifyUser)
//userRoutes.post('/signin' , )



export default userRoutes