import React from "react";
import EducationCard from "./EducationCard";

const Trainee = () => {
  const trainee = [
    {
    degree: "Algorithm Course",
    institute: "hhttps://synapse0.com/",
    year: "August 2021 - February 2022",
  }
];
  return (
    <div>
      <div className="relative max-w-2xl mx-auto mt-16">
        <div className="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul className="space-y-2">
          {
            trainee.map((trainee)=>(
              <EducationCard key={trainee.id} education={trainee} />
            ))
          }
         
        </ul>
      </div>
    </div>
  );
};

export default Trainee;
