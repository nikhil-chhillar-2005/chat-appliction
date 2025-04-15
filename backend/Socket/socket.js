const Server=require('socket.io').Server;
const http=require('http');
const express=require('express');
const app=express();

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:`http://localhost:${process.env.PORT}`,
        methods:['GET','POST'],
        credentials:true,
    },
});

 const getreceiverSocketid=(receiverId)=>{
    return usersocketmap[receiverId];
}

const usersocketmap={};

io.on('connection',(socket)=>{
    console.log('A user connected:', socket.id);

    const userId=socket.handshake.query.userId;

    if(userId!=="undefined") usersocketmap[userId]=socket.id;

    // emit is uset to send imformation to all client
    io.emit("getonlineuser",Object.keys(usersocketmap));
    // socket on is used to listen the events on both client and server side
    socket.on('disconnect',()=>{
        console.log('User disconnected:', socket.id);

        delete usersocketmap[userId];
        io.emit("getonlineuser",Object.keys(usersocketmap));
    }); 

    
})

module.exports={app,io,server,getreceiverSocketid};