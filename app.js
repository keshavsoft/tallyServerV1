import { exec } from "child_process";
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import express from "express";

import loadConfig from "./configLoader.js";
import setupRoutes from "./routes.js";
import startServer from "./server.js";

import MiddleWaresForProtected from "./MiddleWares/Protected/entryFile.js";

import { router as routerFromFromTally } from "./FromTally/routes.js";
import { router as routerFromApi } from "./Api/routes.js";
import { router as routerFromToTally } from "./ToTally/routes.js";
import { router as routerFromSecured } from "./Secured/routes.js";
import { router as routerFromProtected } from "./Protected/routes.js";
import { router as routerFromMain } from "./Main/routes.js";

loadConfig();

const app = express()

setupRoutes(app);

app.use("/ToTally", routerFromToTally);;

app.use("/Api", routerFromApi);
app.use("/FromTally", routerFromFromTally);
app.use("/Secured", routerFromSecured);
app.use("/Protected", MiddleWaresForProtected, routerFromProtected);
app.use("/Main", routerFromMain);

const { port } = startServer(app);

if (process.env.OPEN_BROWSER === "true") {
    // exec(`start http://localhost:${port}/index.html`);
    // exec(`start http://localhost:${port}/Tally/Masters/V9/index.html`);
};