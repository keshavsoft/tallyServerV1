import ToStockItemRow from "./ToStockItemRow.js";

const TransformStockItems = (data) => {
    return data.map(ToStockItemRow);
};

export default TransformStockItems;
