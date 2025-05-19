import { Router } from "express";
import {productsManager} from "../../data/managers/mongo/manager.mongo.js"
import passport from "../../middlewares/passport.mid.js";
const productsRouter = Router();

const createOne = async (req, res, next) =>{
try {
    const {method, originalUrl:url}=req;
    const data = req.body;
    data.owner_id = req.user._id;
    const response = await productsManager.createOne(data);
    res.status(201).json({response, method, url});
} catch (error) {
    next(error);
}
}
const readAll = async (req, res, next) =>{
try {
    const {method, originalUrl:url} = req;
    const filter = req.query;
    const response = await productsManager.readAll(filter);
    if(response.length === 0){
        const error = new Error("Not found");
        error.statusCode = 404;
        throw error;
    }
    res.status(201).json({response, method, url});
} catch (error) {
    next(error);
}
}
const readById = async (req, res, next) =>{
    try {
        const {method, originalUrl:url} = req;
        const {id} = req.params;
        const response = await productsManager.readById(id);
        if(!response){
            const error = new Error("Not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(201).json({response, method, url});
    } catch (error) {
        next(error);
    }
}
const updateById = async (req, res, next) =>{
    try {
        const { method, originalUrl:url} = req;
        const {id} = req.params;
        const data = req.body;
        const response = await productsManager.updateById(id, data)
        if(!response){
            const error = new Error("Not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({respose, method, url});
    } catch (error) {
        next(error);
    }
}
const destroyById = async (req, res, next) =>{
    try {
        const { method, originalUrl:url} = req;
        const {id} = req.params;
        const response = await productsManager.destroyById(id);
        if(!response){
            const error = new Error("Not found");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({response, method, url});
    } catch (error) {
        next(error);
    }
}
const forbbiden = async (req, res, next) =>{
    try {
        const error = new Error("Forbbiden");
        error.statusCode = 403;
        throw error;
    } catch (error) {
        next(error);
    }
}

const opts = {session:false, failureRedirect:"/api/auth/forbbiden"};

productsRouter.post("/", passport.authenticate("admin", opts), createOne);
productsRouter.get("/", readAll);
productsRouter.get("/:id", readById);
productsRouter.put("/:id",  passport.authenticate("admin",opts), updateById);
productsRouter.delete("/:id",  passport.authenticate("admin",opts), destroyById);
productsRouter.get("/forbbiden", forbbiden);

export default productsRouter;


