import React, { useRef } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import PatientData from "../../../PatientData.json";

const ChatUI = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const canScroll = PatientData.length > 3; // Adjust this value based on how many elements you want to show before scrolling is needed

  return (
    <>
      <Nav />
      <div className="flex items-center justify-between mx-2 my-4">
        {canScroll && (
          <button
            className="h-10 w-10 mx-2 p-4 flex justify-center font-extrabold items-center cursor-pointer bg-gray-800 text-white rounded-full"
            onClick={scrollLeft}
          >
            🠈
          </button>
        )}
        <div
          className="flex overflow-x-auto scrollbar-hide space-x-4"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {PatientData.map((_, index) => (
            <Sidebar key={index} />
          ))}
        </div>
        {canScroll && (
          <button
            className="h-10 w-10 flex p-4 mx-2 justify-center items-center font-extrabold cursor-pointer bg-gray-800 text-white rounded-full"
            onClick={scrollRight}
          >
            🠊
          </button>
        )}
      </div>
    </>
  );
};

export default ChatUI;
