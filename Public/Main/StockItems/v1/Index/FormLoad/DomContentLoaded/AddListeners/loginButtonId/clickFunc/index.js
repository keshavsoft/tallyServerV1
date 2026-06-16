import postLogin from "./api/postLogin.js";
import handleLoginFailure from "./ui/loginFailure/index.js";
import handleLoginSuccess from "./ui/loginSuccess/index.js";

const clickFuncToRun = async () => {
    const response = await postLogin();

    if (response.status === 200) {
        handleLoginSuccess();
        return;
    };

    handleLoginFailure();
};

export default clickFuncToRun;
