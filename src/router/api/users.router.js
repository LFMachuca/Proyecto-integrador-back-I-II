import {updateUser} from "../../controllers/users.controller.js"
import RouterHelper from "../../helpers/router.helper.js";


class UsersRouter extends RouterHelper {
  constructor() {
    super();
    this.init();
  }
  init = () => this.update("/", ["USER", "ADMIN"], updateUser);
}
const usersRouter = (new UsersRouter).getRouter();
export default usersRouter;
