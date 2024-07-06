import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

const ChatUI = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <Sidebar />
        <ChatArea />
      </div>
    </>
  );
};

export default ChatUI;
