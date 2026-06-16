import express from 'express';

import funcFromShowAll from './ShowAll/controller.js';

const tablePath = "Data/Main/StockItems.json";

const router = express.Router();

router.get('/ShowAll', (req, res) => funcFromShowAll({ res, inTablePath: tablePath }));

export { router };