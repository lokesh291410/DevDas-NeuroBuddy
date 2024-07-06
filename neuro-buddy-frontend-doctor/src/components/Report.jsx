import React from "react";
import { useParams } from "react-router-dom";
import { usePatientData } from "./PatientDataContext";

const Report = () => {
  const { uid } = useParams();
  const patientData = usePatientData();
  const data = patientData.find((patient) => patient.assessment.uid === uid);

  if (!data) {
    return (
      <div className="text-5xl text-white font-bold flex justify-center items-center h-screen">
        Report not found.
      </div>
    );
  }

  const {
    patient,
    background_information,
    assessment,
    conclusion,
    follow_up_plan,
  } = data;

  return (
    <div className="container px-6 py-6 text-gray-800 border bg-gray-300">
      <h1 className="text-2xl text-center mb-6 font-extrabold">
        Patient Report
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-bold">Patient Information</h2>
        <hr />
        <p>Name: {patient.name}</p>
        <p>Age: {patient.age}</p>
        <p>Gender: {patient.gender}</p>
        <p>Date of Birth: {patient.dob}</p>
        <p>Address: {patient.address}</p>
        <p>Contact: {patient.contact}</p>
        <p>Occupation: {patient.occupation}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold">Background Information</h2>
        <hr />
        <p>Personal History: {background_information.personal_history}</p>
        <p>Current Symptoms: {background_information.current_symptoms}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold">Assessment</h2>
        <hr />
        <p>Date: {assessment.date}</p>
        <p>Psychologist: {assessment.psychologist}</p>

        <h3 className="text-lg font-bold">Referral Questions</h3>
        <ul className="list-disc ml-6">
          {assessment.referral_questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>

        <p>Observations: {assessment.observations}</p>
        <p>Behavioral Observations: {assessment.behavioral_observations}</p>
        <p>Probable Diagnosis: {assessment.probable_diagnosis.primary}</p>

        <h3 className="text-lg font-bold">Recommendations</h3>
        <ul className="list-disc ml-6">
          {assessment.recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold">Conclusion</h2>
        <hr />
        <p>{conclusion}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold">Follow-Up Plan</h2>
        <hr />
        <p>{follow_up_plan}</p>
      </section>
    </div>
  );
};

export default Report;
