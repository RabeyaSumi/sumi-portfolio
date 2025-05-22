import React from "react";
import ekramul from "../../assets/images/ekramul.png";
import nesat from "../../assets/images/nesat.png";
import "./Home.css";
import Typed from "react-typed";
import Snowfall from "react-snowfall";
import { HashLink as Link } from "react-router-hash-link";
// import { DiNodejs } from 'react-icons/di'
const Home = () => {
  return (
<div className="overflow-hidden" >

<div
        style={{
          // height: 600,
          // top: 0,
          // width: "100%",
          overflow:'hidden',
          background: "black",
          // position: "absolute",
        }}
      >
        <Snowfall snowflakeCount={200} />
      </div>

    <div className="min-h-screen ">
      <div className="2xl:max-w-7xl xl:max-w-6xl mx-auto mt-16 flex flex-col-reverse lg:flex-row  justify-between items-center">
        <div className="w-full  lg:w-2/3">
     
          <div>
            <p
              data-aos="fade-down-right"
              data-aos-duration="1000"
              className="uppercase text-left text-xs 2xl:text-lg xl:text-sm text-accent"
            >
              WELCOME!
            </p>
            <p
              data-aos="fade-down-right"
              data-aos-duration="1000"
              className="uppercase font-semibold my-7 text-left text-3xl  lg:text-4xl text-white leading-snug"
            >
              I'm <span style={{color:'#40E0D0'}}>Rabeya Sumi</span>
              <br />
              <span style={{color:'#40E0D0', fontSize:'20px'}}>
                <Typed
                  strings={[
                    " Web Developer",
                    " Frontend Developer",
                    " Backend Developer"
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </p>
            <p
              data-aos="fade-down-right"
              data-aos-duration="1000"
              className="text-left text-base text-accent w-full lg:w-[60ch]"
            >
              {/* Hi I am a Mern Stack developer And I can build your website as you
              want. */}
              Greetings! I am a fontend developer with a passion for collaborating with teams or working independently to deliver exceptional results.
              <br />
              <br />
              With my extensive experience in development, I am confident in my ability to deliver high-quality solutions that meet your business needs. I am committed to staying up-to-date with the latest technologies and best practices to ensure that my work is always of the highest quality.
            </p>
          </div>
          <div className="flex gap-5 my-10 -mb-20">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <a
                className="anchor-button py-[0.85rem] px-4 lg:px-12"
                href=""
          
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>






            </div>

            <div data-aos="zoom-in" data-aos-duration="1000">
              <Link
                smooth
                className="anchor-button py-[0.85rem] px-4 lg:px-12"
                to="/landing#contact"
              >
                Say Hello!
              </Link>
            </div>
          </div>
          <div className="text-accent flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pr-0 lg:pr-36 mt-32">
            <div>
              <h5
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-left mb-3 uppercase tracking-wide"
              >
                Find Me
              </h5>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex gap-5"
              >
                <a
                  // href="https://github.com/emonmorol"
                  href="https://github.com/RabeyaSumi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i className="fa-brands fa-github"></i>
                  </div>
                </a>
                <a
                  // href="https://www.linkedin.com/in/ekramul-hasan/"
                  href="https://www.linkedin.com/in/rabeya-sumi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="action-box">
                    {" "}
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h5
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-left mb-3 uppercase tracking-wide"
              >
                Best skills
              </h5>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex gap-5"
              >
         
                <div className="action-box text-yellow-500">
                  <i className="fa-brands fa-js-square"></i>
                </div>
                <div className="action-box text-blue-500">
                  <i className="fa-brands fa-python"></i>
                </div>
                <div className="action-box text-red-500">
                  {/* <i className="fa-brands fa-java"></i> */}
                  <i className="fa-brands fa-php"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="image w-[32rem] lg:w-[32rem] h-[30rem] lg:h-[30rem] flex justify-end bg-white relative mb-20 mt-8 lg:mt-0"
        >
          <img style={{width:"500px", height:"500px", objectFit:"fill"}} className="absolute bottom-0 pImage" src="https://i.ibb.co.com/Q3hCM9y1/profile-sumi.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
