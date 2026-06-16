// Projects/WebSocketClient/V1/registerHandlers.js
import {
    RegisterHandlerFunc,
    SendFunc
} from "../../../CommonExpose/wsToTally.js";

import tallyLedgers from "../../../FromTally/V4/LedgerNames/Transform/service.js";
import tallyStockItems from "../../../FromTally/V4/StockItems/Transform/service.js";

const StartFunc = () => {

    RegisterHandlerFunc({
        key: "getLedgerNames",
        handler: async () => {
            const data = await tallyLedgers();
            console.log("getLedgerNames : ", data.length);
            let dataToSend = {};
            dataToSend.Type = "ledgerNames";
            dataToSend.asArray = data;

            SendFunc(JSON.stringify(dataToSend));
        }
    });

    RegisterHandlerFunc({
        key: "getStockItems",
        handler: async () => {
            const data = await tallyStockItems();
            console.log("getStockItems : ", data.length);
            let dataToSend = {};
            dataToSend.Type = "stockItems";
            dataToSend.asArray = data;
            SendFunc(JSON.stringify(data));
        }
    });
};

export default StartFunc;