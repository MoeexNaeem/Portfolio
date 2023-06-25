/* eslint-disable no-unused-vars */
import React from "react";
import "../Skills/Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills container">
        <div className="text-center mt-4 skills_heading">My Skills</div>
        <div className="text-center mt-1 mb-3">
          <span className="other_heading">Why Choose me</span>
        </div>
        <div className="text-center">
          <p className="skills_paragraph">
            I specialize in creating dynamic and responsive web applications
            using the latest React frameworks and libraries. With a keen eye for
            detail and a passion for delivering high-quality code
          </p>
        </div>

        <div className="my-5 grides-container">
          <div className="my-2">
            <div className="my-2">
              <span className="span_editing">Web development</span>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bars w-75"></div>
            </div>
          </div>
          <div className="my-2">
            <div className="my-2">
              <span className="span_editing">React Js</span>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bars w-100"></div>
            </div>
          </div>
          <div className="my-2">
            <div className="my-2">
              <span className="span_editing">Web Design</span>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bars w-75"></div>
            </div>
          </div>
          <div className="my-2">
            <div className="my-2">
              <span className="span_editing">SEO</span>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bars w-75"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
