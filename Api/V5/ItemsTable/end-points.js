import express from 'express';
import distinctFunc from './Distinct/controller.js';

const tableName = "ItemsTable";

const router = express.Router();
router.get('/Distinct/:columnName', (req, res) => distinctFunc({ req, res, inTableName : tableName}));

export { router };