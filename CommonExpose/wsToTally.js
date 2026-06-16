let ws = null;
const handlers = new Map();

const SetFunc = ({ inWs }) => {
    ws = inWs;

    ws.on("message", (data) => {
        const message = data.toString();

        const handler = handlers.get(message);

        if (handler) {
            handler(data);
        }
    });
};

const SendFunc = (message) => {
    if (ws?.readyState === 1) {
        ws.send(message);
    }
};

const RegisterHandlerFunc = ({ key, handler }) => {
    handlers.set(key, handler);
};

export { SetFunc, SendFunc, RegisterHandlerFunc };