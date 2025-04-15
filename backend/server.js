const path =require('path');
const express=require('express');
const app=require('./Socket/socket.js').app;
const server=require('./Socket/socket.js').server;

const dotenv=require('dotenv');
const cors=require('cors');
const cookieparser=require('cookie-parser')

const mongoose=require("mongoose")

const connect=require("./db/mongoose");
const Authroute=require('./Routes/Auth');
const messageroute=require('./Routes/messageroute');
const Userroute=require('./Routes/userroute');

const _dirname=path.resolve();

const PORT= process.env.PORT || 5000

dotenv.config();
app.use(express.json()) // to parse json data for request body
app.use(cors({
    credentials:true,
    origin: `http://localhost:${PORT}`
})) // to allow cross-origin requests
app.use(cookieparser()) // to parse cookies from request headers
// Route call
app.use('/api/auth',Authroute);
app.use('/api/message',messageroute);
app.use('/api/user',Userroute);
app.use(express.static(path.join(_dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(_dirname,"frontend","dist","index.html"));
})


server.listen(PORT,()=>{
    connect();
    console.log("server is runing on ",PORT);
});