import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <div className="text-xl font-bold text-white">LOGO AND INFO</div>
        <div className="space-x-2">
          <button className="bg-gray-800 px-4 py-2 rounded text-white font-bold hover:border hover:border-white">
            NEW SESS
          </button>
          <button className="bg-gray-800 px-4 py-2 rounded text-white font-bold hover:border hover:border-white">
            END SESS
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
