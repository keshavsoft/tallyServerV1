import express from 'express';
import { router as routerFromItemsTable } from "./ItemsTable/end-points.js";
import { router as routerFromStockItems } from "./StockItems/end-points.js";

const router = express.Router();
router.use('/ItemsTable', routerFromItemsTable);
router.use('/StockItems', routerFromStockItems);

export { router };