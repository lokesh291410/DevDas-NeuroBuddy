import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import maleImage from "../assets/male.png";
import femaleImage from "../assets/female.png";
import diagnosData from "../../../diagnosData.json";

function Sidebar() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * diagnosData.length);
    setSelectedPatient(diagnosData[randomIndex]);
  }, []);

  if (!selectedPatient) {
    return null; // or render a loading indicator
  }

  const { patient, assessment } = selectedPatient;
  const { gender, name, age, contact } = patient;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleViewReport = () => {
    if (assessment && assessment.uid) {
      navigate(`/report/${assessment.uid}`);
    }
  };

  const handleSubmit = () => {
    alert(`Session started for ${name}`);
  };

  return (
    <div className="flex flex-col w-1/4 mb-4 ml-2 mr-2 border border-slate-400 p-4 rounded-xl justify-start items-center">
      <h1 className="text-white font-bold text-xl">PATIENT INFO</h1>
      <img
        src={gender === "female" ? femaleImage : maleImage}
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
                  Age
                </th>
                <td className="py-4 px-6 font-semibold text-white">{age}</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:border-white">
                <th className="py-4 px-6 font-thin text-gray-900 whitespace-nowrap dark:text-white">
                  Contact
                </th>
                <td className="py-4 px-6 font-semibold text-white">
                  {contact}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="flex flex-col justify-start items-center space-y-2 m-6  mb-2 py-2 mx-2">
        <button
          className="bg-gray-800 px-4 py-2 rounded-lg text-white font-bold hover:bg-gray-700 active:bg-green-950"
          onClick={handleSubmit}
        >
          SESSION
        </button>
        <button
          className="bg-gray-800 px-4 py-2 rounded-lg text-white font-bold hover:bg-gray-700 active:bg-green-950"
          onClick={handleViewReport}
        >
          VIEW REPORT
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
