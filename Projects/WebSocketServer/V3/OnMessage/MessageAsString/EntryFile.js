import tallyLedgers from "../../../../../FromTally/V4/LedgerNames/Transform/service.js";
import tallyStockItems from "../../../../../FromTally/V4/StockItems/Transform/service.js";

let StartFunc = ({ inDataAsString, inws, inClients, inChatLog, inSendFunc }) => {
    let LocalDataAsSting = inDataAsString;

    switch (LocalDataAsSting) {
        case "getLedgerNames":
            tallyLedgers().then(promiseData => {
                inws.send(JSON.stringify(promiseData));
            });

            break;

        case "getStockItems":
            tallyStockItems().then(promiseData => {
                inws.send(JSON.stringify(promiseData));
            });

            break;

        default:
            break;
    };
};

export { StartFunc };