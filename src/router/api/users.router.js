import {updateUser, sendEmail, updatePassword} from "../../controllers/users.controller.js"
import RouterHelper from "../../helpers/router.helper.js";


class UsersRouter extends RouterHelper {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.update("/", ["USER", "ADMIN"], updateUser);
    this.read ("/:email",["PUBLIC"], sendEmail)
    this.update("/reset-password/:email",["PUBLIC"], updatePassword)
  }
}
const usersRouter = (new UsersRouter).getRouter();
export default usersRouter;
