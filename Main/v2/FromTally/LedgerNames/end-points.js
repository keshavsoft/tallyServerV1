import express from 'express';
import { getFunc } from "./Transform/controller.js";

const router = express.Router();

router.get('/Transform', (req, res) => getFunc({ res }));

export { router };