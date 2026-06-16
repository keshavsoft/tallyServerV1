import fs from "fs";
import Ajv from "ajv";

import { JSONFilePreset } from 'lowdb/node'

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
    type: "object",
    properties: {
        LedgerName: { type: "string" }
    },
    required: ["LedgerName"],
    additionalProperties: true
};

const startFunc = async ({ inTablePath, inRequestBody, inRequestPk }) => {
    const db = await JSONFilePreset(inTablePath, []);

    await db.read();

    const validate = ajv.compile(schema);
    const valid = validate(inRequestBody)
    
    if (!valid) return false;

    const index = db.data.findIndex(element => {
        return element.pk === Number(inRequestPk);
    });
    
    if (index === -1) return false;

    db.data[index] = {
        ...db.data[index],
        ...inRequestBody
    };

    await db.write();

    return await true;
};

export { startFunc };
