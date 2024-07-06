import React from "react";
import logo from "../assets/logorevamp.png";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center text-xl text-white font-extrabold">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          NEURO BUDDY
        </div>
      </nav>
    </>
  );
};

export default Nav;
