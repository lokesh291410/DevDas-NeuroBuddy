import React from "react";
import Nav from "./Nav";

const ChatUI = () => {
  return (
    <>
      <Nav />
      {/* <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <div className="w-full max-w-4xl p-4 border border-gray-700 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold">LOGO AND INFO</div>
            <div className="space-x-2">
              <button className="bg-gray-800 px-4 py-2 rounded">
                NEW SESS
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded">
                END SESS
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/4 bg-gray-800 p-4 rounded">Sidebar</div>
            <div className="w-3/4 flex flex-col space-y-4">
              <div className="bg-gray-800 p-4 rounded">Header</div>
              <div className="bg-gray-800 flex-grow p-4 rounded">Chat area</div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="flex-grow bg-gray-800 p-4 rounded"
                  placeholder="Type a message"
                />
                <button className="bg-gray-800 p-4 rounded">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ChatUI;
