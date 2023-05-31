/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://64773bd19233e82dd53b3989.mockapi.io/crud-react-app")
      .then((response) => {
        setApiData(response.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(
        `https://64773bd19233e82dd53b3989.mockapi.io/crud-react-app/${id}`
      )
      .then(() => {
        getData();
      });
  }

  function toLocalStore(id, name, email, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
  }

  return (
    <>
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.e_name}</td>
                  <td>{item.e_email}</td>
                  <td>{item.e_age}</td>
                  <td>
                    <button className="btn btn-warning">
                      <NavLink
                        to="/edit"
                        onClick={() =>
                          toLocalStore(
                            item.id,
                            item.e_name,
                            item.e_email,
                            item.e_age
                          )
                        }
                      >
                        Edit
                      </NavLink>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        if (window.confirm("Are you sure?")) {
                          handleDelete(item.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;
