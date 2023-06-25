/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "./Api";

const MyComponent = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.items);

    const handleFetchData = () => {
        fetchData();
      };

  console.log(fetchData);

  return (
    <>
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.e_name}</td>
                <td>{item.e_email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
    </>
  );
};

export default MyComponent;
