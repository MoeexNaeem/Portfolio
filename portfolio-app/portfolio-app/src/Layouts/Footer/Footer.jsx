/* eslint-disable no-unused-vars */
import React from "react";
import "../Footer/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
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
                <p className="copyright">MoeexNaeem© 2023</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
