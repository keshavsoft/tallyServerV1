let ws = null;

const SetFunc = ({ inWs }) => {
    ws = inWs;
};

const ReadFunc = () => {
    return ws;
};

export { SetFunc, ReadFunc };