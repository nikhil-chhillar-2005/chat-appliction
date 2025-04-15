const { get } = require("mongoose");
const Conversation = require("../Models/conversationmodel");
const Message = require("../Models/messagemodel");
const { getreceiverSocketid, io } = require("../Socket/socket");

const messagecontroller = {
    sendmessage: async (req, res) => {
        try {
            const { message } = req.body;
            const { id:receiverID } = req.params;
            const  senderID = req.user.id;

            let conversation=await Conversation.findOne(
                { participants: { $all: [senderID, receiverID] } },
            );
            if(!conversation) {
                conversation = await Conversation.create({
                    participants: [senderID, receiverID],
                });
            }
            const newMessage=new Message({
                senderID,
                receiverID,
                message,
            });
            await newMessage.save();

            if(newMessage){
                conversation.messages.push(newMessage._id);
                await conversation.save();
            }
            
            const receiverSocketid=getreceiverSocketid(receiverID);
            if(receiverSocketid){
                // io.to(socketid).emit()used to send data to specific client
                io.to(receiverSocketid).emit("newMessage",newMessage)
            }

            res.status(200).json({ newMessage });

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "internal server error" });
        }
    },
    getmessage: async (req, res) => {
        try{
            const { id: userToChat } = req.params;
            const userID = req.user.id;
            const conversation = await Conversation.findOne({
                participants: { $all: [userID, userToChat] },
            }).populate("messages");
            if (!conversation) {
                return res.status(404).json({ message: "No conversation found" });
            }
            const messages=conversation.messages;
            res.status(200).json({ messages });
        }
         catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "internal server error" });
        }
    },
}
module.exports = messagecontroller;