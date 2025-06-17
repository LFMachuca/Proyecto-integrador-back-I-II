import {
  indexView,
  loginView,
  registerView,
  detailsView,
  profileView,
  updateUserView,
  cartView,
  verifyView,
  resetView,
  resetPassView
} from "../controllers/views.controller.js";
import RouterHelper from "../helpers/router.helper.js";

class ViewsRouter extends RouterHelper {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.render("/", ["PUBLIC"], indexView);
    this.render("/login", ["PUBLIC"], loginView);
    this.render("/register", ["PUBLIC"], registerView);
    this.render("/details/:pid", ["PUBLIC"], detailsView);
    this.render("/profile", ["USER", "ADMIN"], profileView);
    this.render("/update-user", ["USER", "ADMIN"], updateUserView);
    this.render ("/cart",["USER","ADMIN"],cartView)
    this.render("/verify/:email", ["PUBLIC"], verifyView);
    this.render("/reset", ["PUBLIC"], resetView);
    this.render("/reset-pass/:email", ["PUBLIC"], resetPassView)
  };
}
const viewsRouter = new ViewsRouter().getRouter();

export default viewsRouter;
