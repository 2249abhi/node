const io = require("socket.io")(8000);
const users = {};

io.on("connection",(socket)=>{
    socket.on("user-joined",(name)=>{
        users[socket.id] = name;
        socket.brodcast.emit("new-user-joined");
    });

    socket.on("send",(message)=>{
        socket.brodcast.emit("received",{message:message,users:users[socket.id]});
    });

    socket.on("disconnect",()=>{
        socket.brodcast.emit("user-left",users[socket.id]);
        delete users[socket.id];
    });
});