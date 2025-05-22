import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SectionDivider from "../../componentss/SectionDivider/SectionDivider";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";

const Landing = () => {


  const [locationTow, setLocationTow] = useState({});

  const Userinfodata = {
    ip: locationTow?.ip,
    city: locationTow?.city?.name,
    state:locationTow?.state?.name,
    country: locationTow?.country?.name,
    latitude:locationTow?.location?.latitude,
    longitude:locationTow?.location?.longitude
  }
  // console.log(Userinfodata)
  // console.log("location info", data)

  useEffect(() => {
    fetch('https://api.geoapify.com/v1/ipinfo?&apiKey=7c1af30919af4a81856ba069927a4ef3')
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(data => setLocationTow(data))
    .catch(error => console.error(error));
  }, []);




  async function refreshToken(){
    try{
        let headers = {
          'Content-Type': 'application/json'
        }
        let url =  `https://zany-puce-moth-hose.cyclic.app/api/postUser`
        let body = JSON.stringify(Userinfodata)
        const response = await axios.post(url, body, {headers});
        let data = response.data
        console.log(data)
        return {
          tokenInfo:data
        }
    } catch(err) {
        console.log("err->", err)
    }
  }



  const timeoutRef = useRef(null);
  useEffect(() => {
    if (Object.keys(locationTow).length !== 0 && timeoutRef.current === null) {
      timeoutRef.current = setTimeout(() => {
        refreshToken();
        timeoutRef.current = null;
      }, 5000);
    }
    return () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, [locationTow]);


  return (
    <div id="home" className="min-w-screen p-5">
      <Home />
      <SectionDivider margin={"mt-10 lg:-mt-42"} />
      <Services />
      <SectionDivider margin={"mt-20"} />
      <Portfolio />
      <SectionDivider margin={"mt-20"} />
      <Resume />
      <SectionDivider margin={"mt-20"} />
      <Contact />
      
    </div>
  );
};

export default Landing;
