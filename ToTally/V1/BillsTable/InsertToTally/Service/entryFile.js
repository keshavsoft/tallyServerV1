import { startFunc as clientData } from "./readClientData.js"
import { importVoucher } from "@keshavsoft/tallyextract";

const StartFunc = async ({ inPk }) => {
    const dataToPost = clientData({ inPk });
    // console.log("dataToPost : ", dataToPost);

    changeDate(dataToPost);

    return await importVoucher(dataToPost);
};

const changeDate = (inDataToPost) => {
    inDataToPost.customerDetails.InvoiceDate = convertDateToYYYYMMDD(inDataToPost.customerDetails.InvoiceDate);
};

const convertDateToYYYYMMDD = (inDate) => {
    return inDate.replaceAll("-", "");
};

export { StartFunc };