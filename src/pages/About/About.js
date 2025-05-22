import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg-primary flex items-center min-h-[95vh] text-accent">
      <div className="flex flex-col gap-10 items-center justify-center  max-w-7xl mx-auto p-5">
        <div className="flex  flex-col lg:flex-row p-4 justify-center items-center gap-10 w-full mb-32">
          <div className="about-box w-64  lg:w-96 h-860 overflow-hidden">
            <img 
              className="inside-img w-64 lg:w-96 h-830"
              src="profile.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-4xl text-secondary font-bold ">
              Rabeya Sumi
            </h2>
            <p className=" text-sm">Web Developer</p>
            <div className="text-center lg:text-left w-full my-4">
              <p

                className="text-left text-base text-accent w-full lg:w-[60ch]"
              >
                As a developer love to create user-friendly, responsive and scalable web applications. I have multiple years of own experience in using the latest technologies and best practices.
                <br />
                <br />
                I'm always eager to learn new skills and explore new challenges. I'm passionate about application development and I love to share my knowledge and collaborate with other developers. If you want to know more about me or my projects, feel free to contact me Thank You.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-xl font-semibold text-secondary">
                Contact Information
              </h2>
              <div>
                Email: rabeyaasumi@gmail.com <br /> Phone: +8801622098349
                <br /> Address: Dhaka, Bangladesh
              </div>
            </div>
            <div className="text-accent flex flex-col lg:flex-row gap-10 lg:gap-10 justify-between pr-0 lg:pr-36 mt-3">
              <div>
                <h5 className="text-left mb-3 uppercase tracking-wide">
                  Find Me
                </h5>
                <div className="flex gap-5">
                  <a
                    href="https://github.com/RabeyaSumi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="action-box">

                      <i className="fa-brands fa-github"></i>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rabeya-sumi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="action-box">

                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                  </a>
         
                </div>
              </div>
              <div>
                <h5 className="text-left mb-3 uppercase tracking-wide">
                  Best skills
                </h5>
                <div className="flex gap-5">


                  <div className="action-box text-yellow-500">
                    <i className="fa-brands fa-js-square"></i>
                  </div>
                  <div className="action-box text-blue-500">
                    <i className="fa-brands fa-react"></i>
                  </div>
                  <div className="action-box text-red-500">
                    <i className="fa-brands fa-php"></i>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default About;
