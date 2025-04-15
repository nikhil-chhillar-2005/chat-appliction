const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    senderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true, 
    },
    receiverID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true, 
    },
    message:{
        type:String,
        required:true,
    },
},{ timestamps:true});
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;