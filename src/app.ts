import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import container from "./Config/installer";
import ServiceIdentifier from "./Constants/ServiceIdentifier";
import bodyParser = require("body-parser");




const app = express();

app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("port", process.env.PORT || 3000);



export default app;