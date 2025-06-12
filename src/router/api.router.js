import RouterHelper from "../helpers/router.helper.js";
import productsRouter from "./api/products.router.js";
import authRouter from "./api/auth.router.js";
import usersRouter from "./api/users.router.js";

class ApiRouter extends RouterHelper{
    constructor (){
        super();
        this.init();
    }
    init = () => {
        this.use("/products", productsRouter);
        this.use("/auth", authRouter)
        this.use("/users", usersRouter)
    }
}
const apiRouter = (new ApiRouter()).getRouter();

export default apiRouter;