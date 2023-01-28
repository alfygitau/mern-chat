const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    // chatName
    chatName: {
      type: String,
      trim: true,
    },
    // isGroupChat
    isGroupChat: { type: Boolean, default: false },
    // users
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // latest message
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    // group admin
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", ChatSchema);
module.exports = Chat;
