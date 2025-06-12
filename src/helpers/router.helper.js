import { Router } from "express";
import setUpResponses from "../middlewares/setUpResponses.mid.js";
import setUpPolicies from "../middlewares/setUpPolicies.mid.js";

class RouterHelper {
  constructor() {
    this.router = Router();
    this.use(setUpResponses);
  }

  getRouter = () => this.router;

  applyMiddlewares = (middlewares) =>
    middlewares.map((mid) => async (req, res, next) => {
      try {
        await mid(req, res, next);
      } catch (error) {
        next(error);
      }
    });

  applyMiddlewaresToRender = (middlewares) =>
    middlewares.map((mid) => async (req, res, next) => {
      try {
        await mid(req, res, next);
      } catch (error) {
        res.status(error.statusCode || 500).render("error", { error });
      }
    });

  create = (path, policies, ...middlewares) =>
    this.router.post(
      path,
      setUpPolicies(policies),
      this.applyMiddlewares(middlewares)
    );
  read = (path, policies, ...middlewares) =>
    this.router.get(
      path,
      setUpPolicies(policies),
      this.applyMiddlewares(middlewares)
    );
  update = (path, policies, ...middlewares) =>
    this.router.put(
      path,
      setUpPolicies(policies),
      this.applyMiddlewares(middlewares)
    );
  destroy = (path, policies, ...middlewares) =>
    this.router.delete(
      path,
      setUpPolicies(policies),
      this.applyMiddlewares(middlewares)
    );
  use = (path, ...middlewares) =>
    this.router.use(path, this.applyMiddlewares(middlewares));
  render = (path, policies, ...middlewares) =>
    this.router.get(
      path,
      setUpPolicies(policies),
      this.applyMiddlewaresToRender(middlewares)
    );
}

export default RouterHelper;
