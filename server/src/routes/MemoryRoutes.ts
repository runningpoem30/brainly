import Routes from "express"
import { createMemory } from "../controllers/ContentController"
import { setUserNameMiddleware } from "../middlewares/setUserNameMiddleware"


const memoryRoutes = Routes()


memoryRoutes.post('/content' , setUserNameMiddleware,  createMemory)


// memoryRoutes.get('/content')



// memoryRoutes.delete('/content')

export default memoryRoutes;