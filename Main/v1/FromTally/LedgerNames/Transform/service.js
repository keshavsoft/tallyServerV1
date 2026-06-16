import { ledgerV1 } from "@keshavsoft/tallyextract";
import SaveToFile from "./SaveToFile.js";

const startFunc = async () => {
    const dataFromTally = await ledgerV1({ inSvCurrentCompany: "me" });

    const LocalNewArray = dataFromTally.data.collection.map(element => {
        return {
            LedgerName: element.metadata.name,
            LedgerParentName: element.parent.value,
            LedgerType: element.metadata.type,
            GstRegistrationType: element?.gstregistrationtype?.value,
            PartyGSTIN: element?.partygstin?.value
        }
    });

    SaveToFile(LocalNewArray);

    return LocalNewArray.length;
};

export default startFunc;