import { Router } from "express"
const shareRoutes = Router()
import { shareMemory } from "../controllers/ShareController"


shareRoutes.post('/brain/share' , shareMemory)


//shareRoutes.get('/brain/:shareLink')


export default shareRoutes