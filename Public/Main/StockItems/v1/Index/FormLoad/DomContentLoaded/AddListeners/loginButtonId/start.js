import clickFuncToRun from "./clickFunc/index.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('loginButtonId');
    // debugger;
    htmlElement.addEventListener("click", (event) =>
        clickFuncToRun({ inCurrentTarget: event.currentTarget })
    );
};

export default funcToRun;
