import express from 'express';

import { postFunc } from "./ToCookie/controller.js";

const router = express.Router();

router.post('/ToCookie', express.json(), postFunc);

export { router };