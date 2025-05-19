import express from "express";
import "dotenv/config.js";
import __dirname from "./utils.js";
import morgan from "morgan";
import {engine} from "express-handlebars";

import errorHandler from "./src/middlewares/errorHandler.js";
import pathHandler from "./src/middlewares/pathHandler.js";
import indexRouter from "./src/router/index.router.js";
import dbConnect from "./src/helpers/dbConnect.helper.js";
/*Server settings */
const server = express();
const port = process.env.PORT || 8080;
const ready = async () =>{
    console.log(`Server is running on port ${port}`);
    await dbConnect(process.env.LINK_DB);
}
server.listen(port, ready);

/*Engine settings */
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views",__dirname + "/src/views");

/*Middleware settings */
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static("public"));
server.use(morgan("dev"));

/*Router settings */
server.use("/", indexRouter);
server.use(pathHandler);
server.use(errorHandler);