import express from 'express';
import { router as routerFromStockItems } from "./StockItems/end-points.js";

const router = express.Router()
router.use("/StockItems", routerFromStockItems);;

export { router };