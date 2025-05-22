import React from "react";
import { useParams } from "react-router-dom";
// import forge from "../../assets/images/forge-the-drill.web.app.png";
import doctorappointment from "../../assets/images/doctor-appointment.png";
import onlinejudge from "../../assets/images/online-judge.jpg";
import corporateZone from "../../assets/images/corporateZone.png";
import { useEffect } from "react";
import { useState } from "react";
import "./PorjectDetails.css";
import ScreenShotModal from "./ScreenShotModal";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openedImage, setOpenedImage] = useState("");

  const projects = [
    {
      id: 1,
      title: "MediConnect Doctors App",
      name: "Specialist Doctors Booking System",
      description: [
        "Implemented key features including doctor listings by specialty, real-time appointment scheduling, patient login/registration, and booking history.",
        "Designed reusable, responsive UI components such as calendars, time slot selectors, and doctor profile cards using Tailwind CSS",
        "•	Developed a responsive, feature-rich doctor appointment booking system frontend using React.js and Tailwind CSS."
      ],
      image: doctorappointment,
      links: {
        live: "https://doctors-appointment-app-5lc4.vercel.app/",
        client: "https://github.com/RabeyaSumi/doctors-appointment-app",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind"
      ],
      screenshots: [
        
      ],
    },
    {
      id: 2,
      title: "Britannia University Online Judge",
      name: "Competitive Programming Platform",
      description: [
        "Developed a web-based online judge system supporting C, C++, Java, and Python code execution with integrated compiler functionality.",
        "Implemented user registration and handle creation, problem archive with structured problem statements (input/output, constraints, samples), and code submission.",
        "Enabled real-time code compilation, verdict-based judging (Accepted, WA, TLE, etc.), and submission statistics with language breakdown.",
      ],
      image: onlinejudge,
      links: {
        live: "https://screenrec.com/share/iAGHUZ35FD",
        client: "https://github.com/RabeyaSumi/Britannia-University-Online-Judge",
      },
      technology: [
        "PHP",
        "HTML",
        "CSS",
        "Javascript",
        "MySQL",
        "XAMPP",
      ],
      screenshots: [
       
      ],
    }
  ]

  useEffect(() => {
    const project = projects.find((x) => x.id === +id);
    setProject(project);
    console.log(project);
  }, [id]);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      className="detail-card flex flex-col xl:mt-14 lg:min-h-screen p-5 lg:p-40 hover:text-white"
    >
      <div className="inside-detail flex flex-col lg:flex-row justify-center items-start gap-8 lg:h-[60vh] text-left mb-32">
        <div className="image-detail w-full h-80  lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
          <img src={project.image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
          <div>
            <h2 className="font-semibold  text-sm xl:my-2 my-4 text-secondary">
              {project.title}
            </h2>
            <h2 className="project-title xl:text-base text-accent font-semibold xl:my-2 text-xl my-4">
              {project.name}
            </h2>
            <div className="my-5">
              <h3 className=" text-secondary xl:my-2 ">Project Overview</h3>
              {project?.description?.map((point, index) => (
                <p key={index} className="text-accent xl:text-sm ">
                  {index + 1}. {point}
                </p>
              ))}
            </div>
            <div className="my-5">
              <h3 className=" text-secondary xl:mb-3">Technology used</h3>
              <div className="flex flex-wrap xl:gap-3 gap-4">
                {project?.technology?.map((point, index) => (
                  <span key={index} className="text-accent xl:text-xs xl:py-1 xl:px-3 hover:none btn">
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="button-content flex justify-between xl:mt-0 mt-5">
            <a
              href={project?.links?.live}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
              View Live
            </a>
            <a
              href={project?.links?.client}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Client Code
            </a>
          </div>
        </div>
      </div>

      <div className="xl:mt-24">
        <p className="text-accent text-center xl:text-4xl font-bold text-xl lg:text-5xl mb-10">
          Project Screenshots
        </p>
        <div className="screenshot w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {project?.screenshots?.map((screenshot) => (
            <button
              onClick={() => {
                setOpenedImage(screenshot);
                setIsOpen(true);
              }}
            >
              <img className="w-full rounded-3xl" src={screenshot} alt="" />
            </button>
          ))}
        </div>
      </div>
      {modalIsOpen && (
        <ScreenShotModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          openedImage={openedImage}
        />
      )}
    </div>
  );
};

export default ProjectDetails;
