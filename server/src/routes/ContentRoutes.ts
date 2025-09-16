import Routes from "express"
import { createMemory , getMemory, getMemoryByTitle, getMemoryByTitleBySearch , addImages} from "../controllers/ContentController"
import { setUserNameMiddleware } from "../middlewares/setUserNameMiddleware"
import { upload } from "../middlewares/multer"


const memoryRoutes = Routes()


memoryRoutes.post('/create-content' , setUserNameMiddleware,  createMemory)
memoryRoutes.post('/create-content/:contentId' , setUserNameMiddleware , createMemory)
memoryRoutes.get('/get-all-content' , setUserNameMiddleware , getMemory )
memoryRoutes.get('/get-content-by-title/:contentId' , setUserNameMiddleware,  getMemoryByTitle)
memoryRoutes.get('/get-content-by-title-in-field' , setUserNameMiddleware , getMemoryByTitleBySearch)
memoryRoutes.post("/content/:contentId/images", setUserNameMiddleware ,  upload.single("image"), addImages);
memoryRoutes.post("/content/images", setUserNameMiddleware , upload.single("image"), addImages);





export default memoryRoutes;