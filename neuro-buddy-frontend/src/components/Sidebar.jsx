import React, { useEffect, useState } from "react";
import maleImage from "../assets/male.png";
import femaleImage from "../assets/female.png";
import docData from "../../../DocData.json";

function Sidebar() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * docData.length);
    setSelectedDoctor(docData[randomIndex]);
  }, []);

  if (!selectedDoctor) {
    return null;
  }

  const { gender, name, hospital, email, uid } = selectedDoctor;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="flex flex-col w-1/4 mb-4 ml-5 mr-2 border border-slate-400 p-4 rounded-xl justify-start items-center">
      <h1 className="text-white font-bold text-xl">PSYCHIATRIST</h1>
      <img
        src={gender === "Male" ? maleImage : femaleImage}
        alt={gender}
        className="w-1/2"
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      {imageLoaded && (
        <div className="mt-4 w-full flex justify-center">
          <table className="text-sm text-left text-gray-400 dark:text-gray-400 rounded-lg overflow-hidden">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:border-white">
                <th className="py-4 px-6 font-thin text-gray-900 whitespace-nowrap dark:text-white">
                  Name
                </th>
                <td className="py-4 px-6 font-semibold text-white">{name}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:border-white">
                <th className="py-4 px-6 font-thin text-gray-900 whitespace-nowrap dark:text-white">
                  Hospital
                </th>
                <td className="py-4 px-6 font-semibold text-white">
                  {hospital}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:border-white">
                <th className="py-4 px-6 font-thin text-gray-900 whitespace-nowrap dark:text-white">
                  Email
                </th>
                <td className="py-4 px-6 font-semibold text-white">{email}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:border-white">
                <th className="py-4 px-6 font-thin text-gray-900 whitespace-nowrap dark:text-white">
                  UID
                </th>
                <td className="py-4 px-6 font-semibold text-white">{uid}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
