import RouterHelper from "../../helpers/router.helper.js";
import {
  createOne,
  readAll,
  readById,
  updateById,
  destroyById,
  forbidden,
} from "../../controllers/products.controller.js";
class ProductsRouter extends RouterHelper {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.create("/", ["ADMIN"], createOne);
    this.read("/", ["PUBLIC"], readAll);
    this.read("/:id", ["PUBLIC"], readById);
    this.update("/:id", ["ADMIN"], updateById);
    this.destroy("/:id", ["ADMIN"], destroyById);
    this.read("/forbbiden", ["PUBLIC"], forbidden);
  };
}
const productsRouter = new ProductsRouter().getRouter();
export default productsRouter;
