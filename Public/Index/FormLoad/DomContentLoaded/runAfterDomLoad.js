import { buildHeader } from "./buildHeader.js";
import { hookAllListeners } from "./AddListeners/start.js";
import tallyStatus from "../../tallyStatus.js";

const runAfterDomLoad = () => {
    buildHeader().then(fromPromise => {
        const timer = setInterval(() => {
            tallyStatus().then();
        }, 20000);

        hookAllListeners();
    });
};

export { runAfterDomLoad };
