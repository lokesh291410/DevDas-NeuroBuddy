import React from "react";
import { useState, useEffect, useRef } from "react";

const ChatArea = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    const userMessage = inputValue;
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", message: userMessage },
    ]);
    setInputValue("");
    //AI response
  };

  return (
    <>
      <div
        className="flex flex-col w-3/4 mb-4 mr-5 ml-2 p-4 rounded-xl relative"
        style={{ height: "86vh" }}
      >
        <div
          className="flex flex-col items-end overflow-auto "
          style={{ flexGrow: 1 }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg m-2 text-extrabold ${
                msg.role === "user"
                  ? "bg-green-500/30 backdrop-blur-md border border-green-500 text-white"
                  : "bg-blue-500/30 backdrop-blur-md border border-blue-500 text-white"
              }`}
              style={{
                maxWidth: "50%",
                wordWrap: "break-word",
                ...(msg.role === "user"
                  ? {
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }
                  : {}),
              }}
            >
              {msg.message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

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
