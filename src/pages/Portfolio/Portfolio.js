import React from "react";
import ProjectCard from "./ProjectCard";
// import forge from "../../assets/images/forge-the-drill.web.app.png";
//import ownSell from "../../assets/images/ownSell.png";
import doctorapp from "../../assets/images/doctor-appointment.png";
// import bagsq from "../../assets/images/bagsq12.png";
import OnlineJudge from "../../assets/images/online-judge.jpg";
// import blood from "../../assets/images/blood-buddies-donation.png";
import corporateZone from "../../assets/images/corporateZone.png";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Doctors Appointment",
      name: "Specialist Doctors Booking Platform",
      // image: forge,
      image: doctorapp,
      links: {
        live: "https://doctors-appointment-app-5lc4.vercel.app/",
        client: "https://github.com/RabeyaSumi/doctors-appointment-app",
      },
    },
    {
      id: 2,
      title: "Online-Judge",
      name: "Competitive Programming Platform with Contests and Problems",
      // image: bagsq,
      image: OnlineJudge,
      links: {
        live: "https://screenrec.com/share/iAGHUZ35FD",
        client: "https://github.com/RabeyaSumi/Britannia-University-Online-Judge",
      },
    }
  ];

  return (
    <div id="portfolio" className="text-white xl:max-w-6xl 2xl:max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-sm text-secondary uppercase">
         PORTFOLIO
        </p>
        <p className="text-accent font-bold text-3xl xl:text-4xl 2xl:text-5xl mb-10">
      My Projects
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
