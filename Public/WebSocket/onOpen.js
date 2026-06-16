let StartFunc = (event) => {
    console.log(" event.currentTarget : ", event.currentTarget)
    event.currentTarget.send("returnOnlineClients");

    event.currentTarget.send("GetWebSocketId");

    event.currentTarget.send("myChat");
};

export { StartFunc };