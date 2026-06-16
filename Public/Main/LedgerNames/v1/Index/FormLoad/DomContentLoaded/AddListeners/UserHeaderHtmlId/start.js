import clickFuncToRun from "./clickFunc/index.js";

const funcToRun = () => {
    const htmlElement = document.getElementById("UserHeaderHtmlId");

    htmlElement.addEventListener("click", () =>
        clickFuncToRun()
    );
};

export default funcToRun;
