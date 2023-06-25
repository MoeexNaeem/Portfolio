/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import "../About/About.css";
import OtherImage from '../About/Images/OtherImage.jpg'

const About = () => {
  return (
    <>
      <div className="hero">
        <div className="text-center my-4">
          <span className="about_heading">ABOUT ME</span>
          <br />
        </div>
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-0 d-flex justify-content-center flex-column">
                  <h3 className="my-3 heading_about">UI/UX DESIGNER</h3>
                  <p className="about_paragraph">
                      Hello, I am Moeex Naeem, a React web developer with 2
                      years of experience. I specialize in creating dynamic and
                      responsive web applications using the latest React
                      frameworks and libraries. With a keen eye for detail and a
                      passion for delivering high-quality code, I strive to
                      develop user-friendly and visually appealing websites that
                      meet client requirements.
                    </p>
                    <NavLink to="">
                    <button className="about_btn">DOWNLOAD CV</button>
                    </NavLink>
                  </div>
                  <div className="col-lg-3 order-1 order-lg-2 header-img">
                  <img className="about_image my-5" src={OtherImage}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
