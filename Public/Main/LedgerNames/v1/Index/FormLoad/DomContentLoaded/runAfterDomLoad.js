import { buildHeader } from "./buildHeader.js";
import { hookAllListeners } from "./AddListeners/start.js";
import applyMenuFromCookie from "./ApplyMenuFromCookie/index.js";

const runAfterDomLoad = () => {
    import("../../../script.js").then(fromPromise => {
        buildHeader().then(fromPromise => {
            applyMenuFromCookie();
            hookAllListeners();
        });
    });
};

export { runAfterDomLoad };
