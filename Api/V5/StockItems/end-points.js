import express from 'express';
import distinctFunc from './Distinct/controller.js';

const tableName = "StockItems";

const router = express.Router();
router.get('/Distinct/:columnName', (req, res) => distinctFunc({ req, res, inTableName : tableName}));

export { router };