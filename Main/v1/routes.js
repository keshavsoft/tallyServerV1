import express from 'express';
import { router as routerFromFromTally } from "./FromTally/routes.js";

const router = express.Router()
router.use("/FromTally", routerFromFromTally);;

export { router };