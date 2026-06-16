import { StartFunc as StartFuncFromCreateToken } from "../../../../Token/jwt/CreateToken.js";

import { startFunc as Service } from "./service.js";
import { ConflictError, StorageError } from "./errors.js";

const postFunc = async (req, res) => {
    try {
        const LocalRequestBody = req.body;

        const LocalUserName = LocalRequestBody.UserName;
        const LocalPassword = LocalRequestBody.Password;

        const fromService = await Service({
            inUserName: LocalUserName,
            inPassword: LocalPassword
        });

        // res.type("application/json").send(fromService);

        if (fromService === false) {
            res.status(409).send("invalid credentials");
            return;
        };

        const LocalToken = StartFuncFromCreateToken({ inObject: "903" });

        res.set("Content-Type", "text/plain");
        res.cookie("KSToken", LocalToken, { maxAge: 900000, httpOnly: false })
            .end("KSToken saved");

    } catch (err) {

        if (err instanceof ConflictError)
            return res.status(409).send(err.message);

        if (err instanceof StorageError)
            return res.status(500).send("Failed to persist data");

        console.error(err);
        res.status(500).send("Unexpected error");
    }
};

export { postFunc };