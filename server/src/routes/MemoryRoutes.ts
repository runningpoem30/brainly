import Routes from "express"
import { createMemory , getMemory, getMemoryByTitle, getMemoryByTitleBySearch} from "../controllers/ContentController"
import { setUserNameMiddleware } from "../middlewares/setUserNameMiddleware"


const memoryRoutes = Routes()


memoryRoutes.post('/content' , setUserNameMiddleware,  createMemory)
memoryRoutes.get('/get-all-content' , setUserNameMiddleware , getMemory )
memoryRoutes.get('/get-content-by-title/:contentId' , setUserNameMiddleware,  getMemoryByTitle)
memoryRoutes.get('/get-content-by-title-in-field' , setUserNameMiddleware , getMemoryByTitleBySearch)


// memoryRoutes.get('/content')



// memoryRoutes.delete('/content')

export default memoryRoutes;