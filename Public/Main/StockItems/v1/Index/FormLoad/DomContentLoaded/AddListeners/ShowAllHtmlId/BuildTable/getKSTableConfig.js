import onReadFail from "../../../CommonFuncs/onReadFail.js";

export const getKSTableConfig = async () => {

    const config = await fetch("./Index/Configs/ShowAll/config.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.table.onReadFail = onReadFail;

    return configJson;
};