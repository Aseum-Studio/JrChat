const { Server } = require("socket.io");
module.exports = (io = new Server()) => {
    io.on('connection', (socket) => {
        var user = {
            oauthed: false
        };
        // Oauth
        socket.on("Oauth", (data) => {
            user = data;
            user.oauthed = true;
            console.log(user);
            socket.emit("get", "Oauth");
        });
        // disconnect
        socket.on('disconnect', () => {
            if (!user.oauthed) return;
            console.log(user);
            io.emit("Leave", user);
        });
        // chat
        socket.on("sendMsg", (msg) => {
            io.emit("recMsg", {
                message: msg,
                sender: user
            });
        })
    });
}