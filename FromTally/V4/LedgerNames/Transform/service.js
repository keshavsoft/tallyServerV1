import { ledger } from "@keshavsoft/tallyextract";

const startFunc = async () => {
    const dataFromTally = await ledger();

    const LocalNewArray = dataFromTally.data.collection.map(element => {
        return {
            LedgerName: element.metadata.name,
            LedgerParentName: element.parent.value,
            LedgerType: element.metadata.type,
            GstRegistrationType: element?.gstregistrationtype?.value,
            PartyGSTIN: element?.partygstin?.value
        }
    });

    return LocalNewArray;
};

export default startFunc;