import hideLoginError from "./hideLoginError.js";
import hideLoginModal from "../../../../../Common/LoginModal/hide.js";
import applyLoggedInMenu from "../../../../../Common/MenuState/applyLoggedInMenu.js";

const handleLoginSuccess = () => {
    hideLoginError();
    hideLoginModal();
    applyLoggedInMenu();
};

export default handleLoginSuccess;
