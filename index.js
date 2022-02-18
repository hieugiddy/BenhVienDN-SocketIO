const io = require("socket.io")(3000);

const dsonline = [];
io.on("connection", (socket) => {
    /*socket.on('disconnect', () => {
        const index = dsonline.findIndex(user => user.peerID === socket.peerID);
        dsonline.splice(index,1);
    });*/
    socket.on('NGUOI_DUNG_DANG_NHAP', user => {
        var index = dsonline.findIndex(e => e.id === user.id);

        if (index == -1)
            dsonline.push(user);
        else
            dsonline[index].peerID=user.peerID

        socket.emit('DSONLINE', dsonline);
    });
});