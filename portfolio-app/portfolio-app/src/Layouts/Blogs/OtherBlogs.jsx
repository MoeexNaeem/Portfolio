/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const OtherBlogs = (props) => {
  return (
    <>
      <div className="spacing">
        <main className="grid container ">
          <div className="col-md-4 col-10 mx-auto my-3 ">
            <main>
              <div className="cardios contaniner">
                <div className="cardios-header">
                  <img
                    src={props.imgSrc}
                    alt="rover"
                  />
                </div>
                <div className="cardios-body">
                  <span className="tag tag-teal">{props.spanName}</span>
                  <h4>{props.heading}</h4>
                  <p>{props.subHeading}</p>
                  <div className="user">
                    <img
                      src={props.avatarImage}
                      alt="user"
                    />
                    <div className="user-info">
                      <h5>{props.date}</h5>
                      <small>{props.subData}</small>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
      </div>
    </>
  );
};

export default OtherBlogs;
