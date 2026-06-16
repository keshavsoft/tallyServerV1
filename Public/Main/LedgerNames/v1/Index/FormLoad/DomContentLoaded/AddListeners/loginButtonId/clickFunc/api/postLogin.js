import getLoginPayload from "../credentials/getLoginPayload.js";

const postLogin = async () => {
    return fetch("/Secured/V1/GenerateToken/ToCookie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            getLoginPayload()
        )
    });
};

export default postLogin;
