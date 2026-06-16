import WebSocket from "ws";
import getMac from "./getMac.js";
import { SetFunc } from "../../../CommonExpose/WebSocketClient/v1/index.js";

import RegisterHandlers from "./registerHandlers.js";

const socketUrl1 = "ws://localhost:3025";
const socketUrl = "wss://mani3.keshavsoft.com";

const startFunc = () => {
    const ws = new WebSocket(socketUrl);

    SetFunc({ inWs: ws });

    RegisterHandlers();

    ws.on("open", () => {
        const localMac = getMac();

        ws.send(getMac());
    });
};

export default startFunc;