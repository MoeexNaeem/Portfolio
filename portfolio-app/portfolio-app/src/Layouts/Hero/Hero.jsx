/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import React from "react";
import "../Hero/Hero.css";
import frontImage from "../Hero/Images/heroImage.svg";
import About from "../About/About";
import Service from "../Works/Service";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Testmonials from "../Testmonials/Testmonials";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-0 d-flex justify-content-center flex-column">
                    <div className="hero_text  text-center">
                      <span className="first_heading">Hello,I am</span>
                      <br />
                      <h1 className="second_heading">Moeex Naeem</h1>
                      <h6 className="third_heading">UI/UX Designer</h6>
                      <div className="mt-3">
                        <NavLink to="/">
                          <button className="hire_me">HIRE ME</button>
                        </NavLink>
                        <NavLink to="/">
                          <button className="download_cv">DOWNLOAD CV</button>
                        </NavLink>
                      </div>
                      <NavLink to="/">
                      <button className="style_icon">
                      <i className="fa-brands fa-facebook-f"></i>
                      </button>
                      </NavLink>
                      <NavLink to="/">
                      <button className="style_icon">
                      <i className="fa-brands fa-google-plus-g"></i>
                      </button>
                      </NavLink>
                      <NavLink to="/">
                      <button className="style_icon">
                      <i className="fa-brands fa-instagram"></i>
                      </button>
                      </NavLink>
                      <NavLink to="https://github.com/MoeexNaeem">
                      <button className="style_icon">
                      <i className="fa-brands fa-github"></i>
                      </button>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={frontImage}
                      className="img-fluid floating "
                      alt="Home Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr/>
      <About/>
      <Service/>
      <Skills/>
      <Portfolio/>
      <Testmonials/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Hero;
