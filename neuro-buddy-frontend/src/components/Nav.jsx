import React from "react";
import logo from "../assets/logorevamp.png";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center text-xl font-bold text-white">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          LOGO AND INFO
        </div>
        <div className="space-x-2">
          <button className="bg-gray-800 px-4 py-2  rounded-lg text-white font-bold hover:bg-gray-700 active:bg-green-950">
            NEW SESS.
          </button>
          <button className="bg-gray-800 px-4 py-2  rounded-lg text-white font-bold hover:bg-gray-700 active:bg-green-950">
            END SESS.
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
