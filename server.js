import http from "http";
import normalizePort from "./port.js";

import { StartFunc as StartFuncFromWebSocketServer } from "./Projects/WebSocketServer/V3/entryFile.js";

export default function startServer(app) {
    const port = normalizePort(process.env.PORT || 3045);
    const server = http.createServer(app);

    StartFuncFromWebSocketServer(server);

    server.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });

    return { port }; // 👈 add this
};