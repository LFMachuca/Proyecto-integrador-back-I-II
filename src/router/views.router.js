import {
  indexView,
  loginView,
  registerView,
  detailsView,
  profileView,
  updateUserView,
} from "../controllers/views.controller.js";
import RouterHelper from "../helpers/router.helper.js";

class ViewsRouter extends RouterHelper {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.read("/", ["PUBLIC"], indexView);
    this.read("/login", ["PUBLIC"], loginView);
    this.read("/register", ["PUBLIC"], registerView);
    this.read("/details/:pid", ["PUBLIC"], detailsView);
    this.read("/profile", ["USER", "ADMIN"], profileView);
    this.read("/update-user", ["USER", "ADMIN"], updateUserView);
  };
}
const viewsRouter = new ViewsRouter().getRouter();

export default viewsRouter;
