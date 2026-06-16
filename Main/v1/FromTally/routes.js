import express from 'express';
import { router as routerFromStockItems } from "./StockItems/end-points.js";
// import { router as routerFromLedgerNames } from "./LedgerNames/routes.js";

const router = express.Router()
// router.use("/LedgerNames", routerFromLedgerNames);
router.use("/StockItems", routerFromStockItems);;

export { router };