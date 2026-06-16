import { stockItemsV1 } from "@keshavsoft/tallyextract";

const GetStockItemsFromTally = async () => {
    const response = await stockItemsV1({
        inSvCurrentCompany: "me"
    });

    return response.data.collection;
};

export default GetStockItemsFromTally;
