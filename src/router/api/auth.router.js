import { Router } from "express";
import passport from "../../middlewares/passport.mid.js";

const authRouter = Router();

const registerUser = async (req, res, next) => {
  try {
    const { method, originalUrl: url } = req;
    const { _id } = req.user;
    return (
      res.status(201),
      json({ message: "User created", response: _id, method, url })
    );
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res, next) => {
  try {
    const { method, originalUrl: url } = req;
    const { _id } = req.user;
    return res
      .status(200)
      .cookie("token", req.user.token, { maxAge: 7 * 24 * 60 * 60 * 1000 })
      .json({ message: "Logged in", response: _id, method, url });
  } catch (error) {
    next(error);
  }
};
const logoutUser = async (req, res, next) => {
  try {
    const { method, originalUrl: url } = req;
    return res
      .status(200)
      .clearCookie("token")
      .json({ message: "Logged out", method, url });
  } catch (error) {
    next(error);
  }
};
const currentUser = async (req, res, next) => {
  try {
    const { method, originalUrl: url } = req;
    return res
      .status(200)
      .json({ message: "Is online", response: true, method, url });
  } catch (error) {
    next(error);
  }
};
const badAuth = async (req, res, next) => {
  try {
    const error = new Error("Bad auth");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    next(error);
  }
};
const forbbiden = async (req, res, next) => {
  try {
    const error = new Error("Forbidden");
    error.statusCode = 403;
    throw error;
  } catch (error) {
    next(error);
  }
};

const optsBad = {session: false, failureRedirect: "/api/auth/bad-auth"};
const optsForbbiden = {session: false, failureRedirect: "/api/auth/forbidden"};

authRouter.post("/register", passport.authenticate("register", optsBad), registerUser);
authRouter.post("/login", passport.authenticate("login", optsBad), loginUser);
authRouter.delete("/logout", passport.authenticate("current", optsForbbiden), logoutUser);
authRouter.get("/current", passport.authenticate("current", optsForbbiden), currentUser);
authRouter.get('/bad-auth', badAuth);
authRouter.get('/forbidden', forbidden);

export default authRouter;


