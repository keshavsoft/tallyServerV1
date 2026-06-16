import ExtractGstRates from "./ExtractGstRates.js";

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

export default ToStockItemRow;
