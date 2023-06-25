/* eslint-disable no-unused-vars */
import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="skills container mb-5">
        <div className="text-center mt-4 skills_heading">Contact</div>
        <div className="text-center mt-1 mb-3">
          <span className="other_heading">Get In Touch With Me</span>
        </div>
        <div className="text-center">
          <p className="skills_paragraph">
            Get yourself an amazing website. Contact me and place very first
            step in the most creative world wiith me.
          </p>
        </div>
       <div className="mt-5 contact_align">
       <div className="containers">
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="text" required />
                <label>Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="text" required />
                <label>Phone Number</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
            <button className="download_cv">DOWNLOAD CV</button>
            </div>
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Contact;
