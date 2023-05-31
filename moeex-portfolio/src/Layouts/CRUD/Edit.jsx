/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Edit = () => {
  const [idData, setIdData] = useState(0);
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [ageData, setAgeData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setIdData(localStorage.getItem("id"));
    setNameData(localStorage.getItem("name"));
    setEmailData(localStorage.getItem("email"));
    setAgeData(localStorage.getItem("age"));
  }, []);

  const updateData = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://64773bd19233e82dd53b3989.mockapi.io/crud-react-app/${idData}`,
        {
          e_name: nameData,
          e_email: emailData,
          e_age: ageData,
        }
      )
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 my-5">
          <button type="submit" className="btn btn-warning my-3">
            <NavLink to="/">Read Form</NavLink>
          </button>
          <form onSubmit={updateData}>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter name"
                value={nameData}
                onChange={(e) => setNameData(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                value={emailData}
                onChange={(e) => setEmailData(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="age"
                value={ageData}
                onChange={(e) => setAgeData(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
