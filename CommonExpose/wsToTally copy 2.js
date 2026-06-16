let ws = null;

const SetFunc = ({ inWs }) => {
    ws = inWs;
};

const SendFunc = (message) => {
    if (ws && ws.readyState === 1) {
        ws.send(message);
    }
};

export { SetFunc, SendFunc };