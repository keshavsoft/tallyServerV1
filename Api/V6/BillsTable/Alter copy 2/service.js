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

const getDbFunc = async ({ inTablePath }) => {
    const db = await JSONFilePreset(inTablePath, []);
    await db.read();

    return db;
};

const isRequestValidFunc = ({ inRequestBody }) => {
    const validate = ajv.compile(schema);

    return validate(inRequestBody);
};

const findRowIndexFunc = ({ inData, inRequestPk }) => {
    return inData.findIndex(element => {
        return element.pk === Number(inRequestPk);
    });
};

const updateRowFunc = ({
    inData,
    inRowIndex,
    inRequestBody
}) => {
    inData[inRowIndex] = {
        ...inData[inRowIndex],
        ...inRequestBody
    };
};

const startFunc = async ({ inTablePath, inRequestBody, inRequestPk }) => {
    const db = await getDbFunc({ inTablePath });

    if (!isRequestValidFunc({ inRequestBody })) return false;

    const rowIndex = findRowIndexFunc({
        inData: db.data,
        inRequestPk
    });

    if (rowIndex === -1) return false;

    updateRowFunc({
        inData: db.data,
        inRowIndex: rowIndex,
        inRequestBody
    });

    await db.write();

    return true;
};

export { startFunc };
