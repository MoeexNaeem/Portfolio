/* eslint-disable no-unused-vars */
import React from "react";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="skills container">
        <div className="text-center mt-4 skills_heading">Portfolio</div>
        <div className="text-center mt-1 mb-3">
          <span className="other_heading">Check My Wonderful Works</span>
        </div>
        <div className="text-center">
          <p className="skills_paragraph">
            Check my most recent and amazing work here. My websites include
            recent and modern designs with latest technologies included.
          </p>
        </div>

        <div className="my-5 grids-container">
          <div className="card my-5">
            <img
              src="https://images.pexels.com/photos/9300738/pexels-photo-9300738.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image"
              className="card-image"
            />
            <div className="button-container">
              <div className="button">
                <i className="fas fa-plus"></i>
              </div>
              <div className="button">
                <i className="fas fa-link"></i>
              </div>
            </div>
          </div>
          <div className="card my-5">
            <img
              src="https://images.pexels.com/photos/6672290/pexels-photo-6672290.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image"
              className="card-image"
            />
            <div className="button-container">
              <div className="button">
                <i className="fas fa-plus"></i>
              </div>
              <div className="button">
                <i className="fas fa-link"></i>
              </div>
            </div>
          </div>
          <div className="card my-5">
            <img
              src="https://images.pexels.com/photos/3932735/pexels-photo-3932735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              className="card-image"
            />
            <div className="button-container">
              <div className="button">
                <i className="fas fa-plus"></i>
              </div>
              <div className="button">
                <i className="fas fa-link"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
