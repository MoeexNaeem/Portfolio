/* eslint-disable no-unused-vars */
import React from "react";
import "../Testmonials/Testmonials.css";

const Testmonials = () => {
  return (
    <>
      <div className="skills container">
        <div className="text-center mt-4 skills_heading">Testmonials</div>
        <div className="text-center mt-1 mb-3">
          <span className="other_heading">Check My Wonderful Works</span>
        </div>
        <div className="text-center">
          <p className="skills_paragraph mb-5">
            Check what people around the world think about my work. Read there
            feedback and reviews.
          </p>
        </div>

        <div
          id="carouselExampleRide"
          className="carousel-dark carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonial-container">
                <div className="testimonial">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
                    alt="Client Avatar"
                    className="avatar"
                  />
                  <h3 className="client-name">John Doe</h3>
                  <div className="stars-container">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam aliquet suscipit lacus, in cursus ante pretium nec.
                    Pellentesque hendrerit, felis eget pharetra commodo, velit
                    dolor consequat tortor, nec dapibus nulla magna eget odio.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-container">
                <div className="testimonial">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
                    alt="Client Avatar"
                    className="avatar"
                  />
                  <h3 className="client-name">John Doe</h3>
                  <div className="stars-container">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam aliquet suscipit lacus, in cursus ante pretium nec.
                    Pellentesque hendrerit, felis eget pharetra commodo, velit
                    dolor consequat tortor, nec dapibus nulla magna eget odio.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-container">
                <div className="testimonial">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
                    alt="Client Avatar"
                    className="avatar"
                  />
                  <h3 className="client-name">John Doe</h3>
                  <div className="stars-container">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam aliquet suscipit lacus, in cursus ante pretium nec.
                    Pellentesque hendrerit, felis eget pharetra commodo, velit
                    dolor consequat tortor, nec dapibus nulla magna eget odio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testmonials;
