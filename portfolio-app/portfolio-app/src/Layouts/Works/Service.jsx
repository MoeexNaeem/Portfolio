/* eslint-disable no-unused-vars */
import React from "react";
import "../Works/Service.css";
import Boxes from "./Boxes";

const Service = () => {
  return (
    <>
      <div className="services container">
        <div className="text-center mt-4 services_heading">SERVICES</div>
        <div className="text-center mt-1 mb-3">
          <span className="seconds_heading">What I Do</span>
        </div>
        <div className="text-center">
          <p className="services_paragraph">
            With a keen eye for detail and a passion for delivering high-quality
            code, I strive to develop user-friendly and visually appealing
            websites that meet client requirements.
          </p>
        </div>
        <Boxes/>
      </div>
    </>
  );
};

export default Service;
