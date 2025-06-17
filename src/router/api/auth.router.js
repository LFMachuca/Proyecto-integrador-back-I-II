import RouterHelper from "../../helpers/router.helper.js";
import passportCb from "../../middlewares/passportCb.mid.js";
import { registerUser, loginUser, logoutUser, currentUser, badAuth,verifyUser, forbidden} from "../../controllers/auth.controller.js" 
class AuthRouter extends RouterHelper {
  constructor (){
    super();
    this.init();
  }
  init = () => {
    this.create("/register", ["PUBLIC"],passportCb("register"), registerUser);
    this.create("/login",["PUBLIC"],passportCb("login"), loginUser);
    this.destroy("/logout", ["USER", "ADMIN"], logoutUser);
    this.read("/current",["USER", "ADMIN"], currentUser);
    this.read('/bad-auth',["PUBLIC"], badAuth);
    this.read('/forbidden',["PUBLIC"], forbidden);
    this.read("/verify/:email/:verifyCode", ["PUBLIC"], verifyUser)
  }
}


const authRouter = (new AuthRouter()).getRouter();


export default authRouter;


