import deleteKSTokenCookie from "../../../Common/AuthCookie/deleteKSTokenCookie.js";
import getTokenFromCookie from "../../../Common/AuthCookie/getTokenFromCookie.js";
import applyLoggedOutMenu from "../../../Common/MenuState/applyLoggedOutMenu.js";
import confirmLogout from "./confirmLogout.js";

const clickFuncToRun = () => {
    const token = getTokenFromCookie();

    if (!token) return;
    if (!confirmLogout()) return;

    deleteKSTokenCookie();
    applyLoggedOutMenu();
};

export default clickFuncToRun;
