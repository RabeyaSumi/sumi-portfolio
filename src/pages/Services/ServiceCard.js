import React from "react";
import "./Services.css";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <div className="service-card text-accent hover:text-white p-8 lg:p-12 ">
        <div className="text-left">
          <p className="text-5xl text-secondary">{icon}</p>
          <h2 className="font-semibold text-xl xl:text-xl 2xl:text-2xl my-4">{title}</h2>
          <p className="text-sm xl:text-sm 2xl:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
