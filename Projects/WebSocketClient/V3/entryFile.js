import WebSocket from "ws";
import getMac from "./getMac.js";
import { SetFunc } from "../../../CommonExpose/wsToTally.js";

import RegisterHandlers from "./registerHandlers.js";

const startFunc = () => {
    const ws = new WebSocket("ws://localhost:3025");

    SetFunc({ inWs: ws });

    RegisterHandlers();

    ws.on("open", () => {
        const localMac = getMac();

        ws.send(getMac());
    });
};

export default startFunc;