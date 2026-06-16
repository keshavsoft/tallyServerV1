import express from 'express';

import { router as routerFromV4 } from "./V4/routes.js";
import { router as routerFromV5 } from "./V5/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";

const router = express.Router()
router.use("/V6", routerFromV6);;

router.use('/V4', routerFromV4);
router.use('/V5', routerFromV5);

export { router };