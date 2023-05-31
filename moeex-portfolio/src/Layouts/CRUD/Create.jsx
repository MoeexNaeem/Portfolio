/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Read from "./Read";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const HandleEvent = (e) => {
    e.preventDefault();
    axios
      .post("https://64773bd19233e82dd53b3989.mockapi.io/crud-react-app", {
        e_name: name,
        e_email: email,
        e_age: age,
      })
      .then(() => {});
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 my-5">
          <form onSubmit={HandleEvent}>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Read />
    </>
  );
};

export default Create;
