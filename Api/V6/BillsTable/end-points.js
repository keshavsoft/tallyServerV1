import express from 'express';

import funcFromShowAll from './ShowAll/controller.js';
import funcFromAlter from './Alter/controller.js';

const tableName = "BillsTable";
const tablePath = "Data/BillsTable.json";

const router = express.Router();

router.get('/ShowAll', (req, res) => funcFromShowAll({ res, inTablePath: tablePath }));
router.post('/Alter/:pk', express.json(), (req, res) => funcFromAlter({ req, res, inTablePath: tablePath }));

export { router };