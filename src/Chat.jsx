import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { targetUserId } = useParams();
  console.log(targetUserId);

  const [messages, setMessages] = useState([
    { firstName: "Nitai", lastName: "Gupta", text: "Hello!", userId: "me" },
    { firstName: "Alex", lastName: "Smith", text: "Hi, how are you?", userId: "other" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  // ✅ Assume current user
  const user = { firstName: "Nitai", lastName: "Gupta", userId: "me" };

  // ✅ Send message handler
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { firstName: user.firstName, lastName: user.lastName, text: newMessage, userId: "me" },
    ]);
    setNewMessage(""); // clear input
  };

  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat with {targetUserId}</h1>

      {/* Messages list */}
      <div className="flex-1 overflow-y-auto p-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              "chat " + (user.firstName === msg.firstName ? "chat-end" : "chat-start")
            }
          >
            <div className="chat-header">
              {`${msg.firstName} ${msg.lastName}`}
              <time className="text-xs opacity-50 ml-2">2 hours ago</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-500 text-white rounded p-2 bg-transparent"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
