
import apiRouter from "./api.router.js";
import viewsRouter from "./views.router.js";
import RouterHelper from "../helpers/router.helper.js";

class IndexRouter extends RouterHelper{
    constructor(){
        super();
        this.init();
    }
    init = () => {
        this.use("/", viewsRouter);
        this.use("/api", apiRouter);   
    }
}
const indexRouter = (new IndexRouter()).getRouter();

export default indexRouter;
