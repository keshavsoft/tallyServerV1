import showAllHtmlId from "./ShowAllHtmlId/start.js";
import withSerialHtmlId from "./WithSerialHtmlId/start.js";
import withSearchHtmlId from "./WithSearchHtmlId/start.js";
import loginHeaderHtmlId from "./loginHeaderHtmlId/start.js";
import loginButtonId from "./loginButtonId/start.js";
import userHeaderHtmlId from "./UserHeaderHtmlId/start.js";
import escapeKey from "./EscapeKey/start.js";

const hookAllListeners = () => {
    showAllHtmlId();
    withSerialHtmlId();
    withSearchHtmlId();
    loginHeaderHtmlId();
    loginButtonId();
    userHeaderHtmlId();
    escapeKey();
};

export { hookAllListeners };
