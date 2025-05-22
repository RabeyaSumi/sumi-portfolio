import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceIProvide = [
    {
      id: 1,
      title: "Full Stack Development",
      description:
        "Full stack developer with expertise in front end and back end technologies, delivering high quality software solutions.",
      icon: (
        <>
          <i className="fa-solid fa-layer-group"></i>
        </>
      ),
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "Front end developer with proficiency in HTML, CSS, and JavaScript, creating intuitive and responsive user interfaces.",
      icon: (
        <>
          <i className="fa-solid fa-code"></i>
        </>
      ),
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "Experienced backend developer with a focus on efficient code, robust architecture, and thorough testing. Delivering high-quality solutions.",
      icon: (
        <>
          <i className="fa-solid fa-server"></i>
        </>
      ),
    }
    // {
    //   id: 4,
    //   title: "React Development",
    //   description:
    //     "My most projects are ReactJS and NextJS based. So I can be your React Developer.",
    //   icon: (
    //     <>
    //       <i className="fa-brands fa-react"></i>
    //     </>
    //   ),
    // },
    // {
    //   id: 5,
    //   title: "Javascript Development",
    //   description:
    //     "Woking exprience with many Javascript projects. I can be your Javascript Developer.",
    //   icon: (
    //     <>
    //       <i className="fa-brands fa-js-square"></i>
    //     </>
    //   ),
    // },
  ];

  return (
    <div id="services" className="text-white xl:max-w-6xl 2xl:max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-sm text-secondary uppercase">Services</p>
        <p className="text-accent font-bold text-3xl xl:text-4xl  2xl:text-5xl mb-10">
          What I Do
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {serviceIProvide.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
