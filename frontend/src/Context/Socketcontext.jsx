import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
export const Socketcontext=createContext();
import { io } from 'socket.io-client'

export const SocketProvider=({children})=>{

    const [socket,setsocket]=useState(null);
    const [onlineuser,setonlineuser]=useState([]);

    const {user}=useContext(AuthContext);

    useEffect(()=>{
        if(user){
            const socket=io("https://chat-app-cuax.onrender.com",{
                query:{
                    userId:user._id,
                }
            });
            setsocket(socket);
            // socket on is used to listen the events on both client and server side

            socket.on("getonlineuser",(users)=>{
                setonlineuser(users)
            })

            return ()=> socket.close();
        }else{
            if(socket){
                socket.close();
                setsocket(null);
            }
        }
    },[user])
    
    return(
        <Socketcontext.Provider value={{socket,onlineuser}}>
            {children}
        </Socketcontext.Provider>
    )
}