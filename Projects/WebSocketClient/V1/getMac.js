import os from "os";

const interfaces = os.networkInterfaces();

const startFunc = () => {
    let machineId = "";

    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            if (!net.internal && net.mac !== "00:00:00:00:00:00") {
                machineId = net.mac;
                return machineId;
            }
        }
    }

    return machineId;
};

export default startFunc;