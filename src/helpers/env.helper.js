import { config } from "dotenv";
import argvsHelper from "./argvs.helper.js";

const mode = argvsHelper.mode;
const path = ".env." + mode;

config({path})

const env = {
    PORT: process.env.PORT,
    LINK_DB: process.env.LINK_DB,
    SECRET: process.env.SECRET
}

export default env;