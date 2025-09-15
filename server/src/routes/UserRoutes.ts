
import { Router } from "express";
const userRoutes = Router()
import { signUp , googleAuth , verifyUser , signIn } from "../controllers/UserController";



userRoutes.post('/signup' ,  signUp)
userRoutes.post('/login' , signIn)
userRoutes.post('/google-signup' , googleAuth)
userRoutes.get('/verify/:id/:token' , verifyUser)




export default userRoutes