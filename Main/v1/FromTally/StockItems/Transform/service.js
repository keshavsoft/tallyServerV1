import { stockItems } from "@keshavsoft/tallyextract";

const StartFunc = async () => {
    const dataFromTally = await stockItems({ inSvCurrentCompany: "me" });

    const LocalNewArray = dataFromTally.data.collection.map(element => {
        const gstdetails = element.gstdetails.at(-1);
        let sgstRate;
        let cgstRate;

        if (gstdetails) {
            const ratedetails = gstdetails.statewisedetails[0].ratedetails;
            const sgst = ratedetails.find(element => element.gstratedutyhead === "SGST/UTGST");
            const cgst = ratedetails.find(element => element.gstratedutyhead === "CGST");

            sgstRate = sgst?.gstrate;
            cgstRate = cgst?.gstrate;
        };

        return {
            StockItemName: element.metadata.name,
            StockItemReservedName: element.metadata.reservedname,
            StockItemType: element.metadata.type,
            StockParentName: element.parent.value,
            StockCategory: element.category.value,
            StockGstApplicable: element.gstapplicable.value,
            StockGstTypeOfSupply: element.gsttypeofsupply.value,
            StockBaseUnits: element.baseunits.value,
            sgstRate,
            cgstRate,
            TaxPer: parseFloat(sgstRate) + parseFloat(cgstRate),
            Uom: element.baseunits.value,
        }
    });

    return LocalNewArray;
};

export default StartFunc;