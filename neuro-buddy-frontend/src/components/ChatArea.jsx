import React from "react";

const ChatArea = () => {
  return (
    <>
      <div
        className="w-3/4 mb-4 mr-5 ml-2 p-4 rounded-xl relative"
        style={{ height: "86vh" }}
      >
        <div className="w-full absolute bottom-0 right-0 flex justify-center items-center pb-1 gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="p-2 rounded-lg flex-grow outline-none border-2 border-gray-500 hover:border-white bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-gray-800 px-4 py-2  rounded-lg text-white font-bold hover:bg-gray-700 active:bg-green-950"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
