import getTokenFromCookie from "../Common/AuthCookie/getTokenFromCookie.js";
import applyLoggedInMenu from "../Common/MenuState/applyLoggedInMenu.js";
import applyLoggedOutMenu from "../Common/MenuState/applyLoggedOutMenu.js";

const applyMenuFromCookie = () => {
    const token = getTokenFromCookie();

    if (!token) {
        applyLoggedOutMenu();
        return;
    };

    applyLoggedInMenu();
};

export default applyMenuFromCookie;
