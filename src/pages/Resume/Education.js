import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "BSc Computer Science And Engineering",
      institute: "Britannia University",
      year: "2018  - 2023 ",
    }
  ];
  return (
    <div>
      <div className="relative max-w-2xl mx-auto mt-16">
        <div className="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul className="space-y-2">
          {educations.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
