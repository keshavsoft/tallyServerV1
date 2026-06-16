import keydownFunc from "./keydownFunc.js";

const funcToRun = () => {
    window.addEventListener("keydown", keydownFunc, true);
};

export default funcToRun;
