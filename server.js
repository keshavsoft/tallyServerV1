import http from "http";
import normalizePort from "./port.js";

import { StartFunc as StartFuncFromWebSocketServer } from "./Projects/WebSocketServer/V3/entryFile.js";
import WebSocketClient from "./Projects/WebSocketClient/V4/entryFile.js";

export default function startServer(app) {
    const port = normalizePort(process.env.PORT || 3045);
    const server = http.createServer(app);

    StartFuncFromWebSocketServer(server);

    server.listen(port, () => {
        try {
            WebSocketClient();
        } catch (err) {
            console.error("WS client failed:", err.message);
        };

        console.log(`http://localhost:${port}`);
    });

    return { port }; // 👈 add this
};