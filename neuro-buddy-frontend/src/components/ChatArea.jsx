import React, { useState, useEffect, useRef } from "react";
import messages from "../../../democonvo.json";

const ChatArea = () => {
  const [messagesList, setMessagesList] = useState(messages || []);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesList]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    const userMessage = inputValue;
    const newMessage = { role: "user", content: userMessage };
    setMessagesList((prevMessages) => [...prevMessages, newMessage]);
    setInputValue("");
    simulateAIResponse();
  };

  const simulateAIResponse = () => {
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content: "This is a simulated AI response.",
      };
      setMessagesList((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  const isEmptyChat = messagesList.length === 0;

  return (
    <>
      <div
        className="flex flex-col w-3/4 mb-4 mr-5 ml-2 p-4 rounded-xl relative"
        style={{ height: "86vh", overflowY: "hidden" }}
      >
        {isEmptyChat ? (
          <div className="flex justify-center items-center h-full text-gray-400">
            No messages to display.
          </div>
        ) : (
          <div
            className="flex flex-col items-start overflow-auto"
            style={{ flexGrow: 1, padding: "2rem", paddingRight: "2rem" }}
          >
            {messagesList.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg m-2 text-extrabold ${
                  msg.role === "user"
                    ? "bg-green-500/30 border border-green-500 text-white self-end"
                    : "bg-blue-500/30 border border-blue-500 text-white self-start"
                }`}
                style={{
                  maxWidth: "50%",
                  wordWrap: "break-word",
                  textAlign: msg.role === "user" ? "right" : "left",
                  marginLeft: msg.role === "user" ? "auto" : "0",
                  marginRight: msg.role === "user" ? "0" : "auto",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                {msg.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-center items-center pb-1 gap-2"
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
            className="p-2 rounded-lg flex-grow outline-none border-2 border-gray-500 hover:border-white bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-gray-800 px-4 py-2 rounded-lg text-white font-bold hover:bg-gray-700 active:bg-green-950"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatArea;
