import express from 'express';
import { router as routerFromGenerateToken } from "./GenerateToken/end-points.js";

const router = express.Router()
router.use("/GenerateToken", routerFromGenerateToken);

export { router };