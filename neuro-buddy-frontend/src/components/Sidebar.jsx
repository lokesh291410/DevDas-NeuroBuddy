import React, { useEffect, useState } from "react";
import maleImage from "../assets/male.png";
import femaleImage from "../assets/female.png";
import docData from "../../../DocData.json";

function Sidebar() {
  const [gender, setGender] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * docData.length);
    const selectedGender = docData[randomIndex].gender;
    setGender(selectedGender);
  }, []);

  return (
    <>
      <div
        className=" flex flex-col w-1/4 mb-4 ml-5 mr-2 border border-slate-400 p-4 rounded-xl justify-start items-center"
        style={{ height: "86vh" }}
      >
        <img
          src={gender === "Male" ? maleImage : femaleImage}
          alt={gender}
          className="w-1/2"
        />
      </div>
    </>
  );
}

export default Sidebar;
