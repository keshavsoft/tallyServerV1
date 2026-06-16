import fs from "fs";
import path from "path";
import { stockItemsV1 } from "@keshavsoft/tallyextract";

const dataPath = "./Data/Main/StockItems.json";

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

const GetStockItemsFromTally = async () => {
    const response = await stockItemsV1({
        inSvCurrentCompany: "me"
    });

    return response.data.collection;
};

const TransformStockItems = (data) => {
    return data.map(ToStockItemRow);
};

const ToStockItemRow = (element) => {
    const { sgstRate, cgstRate } = ExtractGstRates(element);

    return {
        StockItemName: element.metadata.name,
        StockItemReservedName: element.metadata.reservedname,
        StockItemType: element.metadata.type,
        StockParentName: element.parent.value,
        StockCategory: element.category.value,
        StockGstApplicable: element.gstapplicable.value,
        StockGstTypeOfSupply: element.gsttypeofsupply?.value,
        StockBaseUnits: element.baseunits.value,
        sgstRate,
        cgstRate,
        TaxPer: Number(sgstRate || 0) + Number(cgstRate || 0),
        Uom: element.baseunits.value
    };
};

const ExtractGstRates = (element) => {
    let sgstRate = 0;
    let cgstRate = 0;

    const gstDetails = element.gstdetails?.at(-1);

    if (!gstDetails) {
        return { sgstRate, cgstRate };
    }

    const rateDetails =
        gstDetails?.statewisedetails?.[0]?.ratedetails ?? [];

    const sgst = rateDetails.find(
        ({ gstratedutyhead }) => gstratedutyhead === "SGST/UTGST"
    );

    const cgst = rateDetails.find(
        ({ gstratedutyhead }) => gstratedutyhead === "CGST"
    );

    sgstRate = sgst?.gstrate ?? 0;
    cgstRate = cgst?.gstrate ?? 0;

    return { sgstRate, cgstRate };
};

const SaveToFile = (rows) => {
    const filePath = path.resolve(dataPath);

    fs.writeFileSync(filePath, JSON.stringify(rows));

    return filePath;
};

const LogSummary = ({ rowsInserted, filePath }) => {
    console.log(`
[StockItems]
Rows Inserted : ${rowsInserted}
File          : ${filePath}
    `);
};

export default StartFunc;