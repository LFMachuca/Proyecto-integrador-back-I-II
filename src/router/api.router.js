import { Router } from "express";
import productsRouter from "./api/products.router.js";
import authRouter from "./api/auth.router.js";
const apiRouter = Router();

apiRouter.use("/products", productsRouter);
apiRouter.use("/auth", authRouter)
export default apiRouter;