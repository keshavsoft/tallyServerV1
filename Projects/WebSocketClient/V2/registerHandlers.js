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


            SendFunc(JSON.stringify(data));
        }
    });

    RegisterHandlerFunc({
        key: "getStockItems",
        handler: async () => {
            const data = await tallyStockItems();
console.log("getStockItems : ", data.length);
            SendFunc(JSON.stringify(data));
        }
    });
};

export default StartFunc;