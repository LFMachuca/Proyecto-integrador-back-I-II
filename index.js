import express from "express";
import "dotenv/config.js";
import __dirname from "./utils.js";
import morgan from "morgan";
import {engine} from "express-handlebars";
import session from 'express-session';
import errorHandler from "./src/middlewares/errorHandler.js";
import pathHandler from "./src/middlewares/pathHandler.js";
import indexRouter from "./src/router/index.router.js";
import dbConnect from "./src/helpers/dbConnect.helper.js";
import MongoStore from 'connect-mongo'; 
import cookieParser from "cookie-parser";
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
server.use(cookieParser(process.env.SECRET)); 
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static("public"));
server.use(morgan("dev"));

/*Router settings */
server.use("/", indexRouter);
server.use(pathHandler);
server.use(errorHandler);

/*Session */
server.use(session({
    secret:process.env.SECRET,
    resave:true,
    saveUninitialized:true, 
    cookies:{maxAge: 7 *24 *60 *60 *1000},
    store: new MongoStore({
      mongoUrl: process.env.LINK_DB,
      collectionName:'sessions'
    })
  }))