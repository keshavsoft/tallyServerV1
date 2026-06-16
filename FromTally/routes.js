import express from 'express';

import { router as routerFromV2 } from "./V2/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";
// import { router as routerFromV4 } from "./V4/routes.js";

const router = express.Router();

router.use('/V2', routerFromV2);
router.use('/V3', routerFromV3);
// router.use('/V4', routerFromV4);

export { router };