import Routes from "express"
import { createMemory , getMemory} from "../controllers/ContentController"
import { setUserNameMiddleware } from "../middlewares/setUserNameMiddleware"


const memoryRoutes = Routes()


memoryRoutes.post('/content' , setUserNameMiddleware,  createMemory)
memoryRoutes.get('/get-all-content' , setUserNameMiddleware , getMemory )


// memoryRoutes.get('/content')



// memoryRoutes.delete('/content')

export default memoryRoutes;