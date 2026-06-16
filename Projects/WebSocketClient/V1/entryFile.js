import WebSocket from "ws";
import getMac from "./getMac.js";
import { SetFunc } from "../../../CommonExpose/wsToTally.js";

import tallyLedgers from "../../../FromTally/V4/LedgerNames/Transform/service.js";
import tallyStockItems from "../../../FromTally/V4/StockItems/Transform/service.js";

const startFunc = () => {
    const ws = new WebSocket("ws://localhost:3025");

    SetFunc({ inWs: ws });

    ws.on("open", () => {
        const localMac = getMac();

        ws.send(getMac());
    });

    ws.on("message", (data) => {
        const LocalDataAsSting = data.toString();
        console.log("data : ", data.toString());

        switch (LocalDataAsSting) {
            case "getLedgerNames":
                tallyLedgers().then(promiseData => {
                    ws.send(JSON.stringify(promiseData));
                });

                break;

            case "getStockItems":
                tallyStockItems().then(promiseData => {
                    ws.send(JSON.stringify(promiseData));
                });

                break;

            default:
                break;
        };
    });
};

export default startFunc;