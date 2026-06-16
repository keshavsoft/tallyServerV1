import GetStockItemsFromTally from "./GetStockItemsFromTally.js";
import TransformStockItems from "./TransformStockItems.js";
import SaveToFile from "./SaveToFile.js";
import LogSummary from "./LogSummary.js";

const StartFunc = async () => {
    const tallyItems = await GetStockItemsFromTally();

    const rows = TransformStockItems(tallyItems);

    const filePath = SaveToFile(rows);

    LogSummary({
        rowsInserted: rows.length,
        filePath
    });

    return rows.length;
};

export default StartFunc;
