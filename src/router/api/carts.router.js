import RouterHelper from "../../helpers/router.helper.js";
import {
  readCart, addProduct
} from "../../controllers/carts.controller.js";
class CartsRouter extends RouterHelper {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.read("/", ["USER"], readCart);
    this.create("/add", ["USER"], addProduct);
    // this.read("/:id", ["PUBLIC"], readById);
    // this.update("/update", ["USER"], updateProduct);
    // this.destroy("/:id", ["ADMIN"], destroyById);
    // this.read("/forbbiden", ["PUBLIC"], forbidden);
  };
}
const cartsRouter = (new CartsRouter()).getRouter();
export default cartsRouter;
