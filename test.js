import os from "os";

const interfaces = os.networkInterfaces();

for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
        if (!net.internal && net.mac && net.mac !== "00:00:00:00:00:00") {
            console.log("Machine ID:", net.mac);
            process.exit();
        }
    }
}