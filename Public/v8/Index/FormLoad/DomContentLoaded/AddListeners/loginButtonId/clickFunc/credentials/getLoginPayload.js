import getPassword from "./getPassword.js";
import getUserName from "./getUserName.js";

const getLoginPayload = () => ({
    UserName: getUserName(),
    Password: getPassword()
});

export default getLoginPayload;
