/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Cards from "./Cards";
import "../Products/AllProducts.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState();

  const API = "";

  const APIs = () => {
    axios.get("https://api.pujakaitem.com/api/products").then((response) => {
      setAllProducts(response.data);
    });
  };

  useEffect(() => {
    APIs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="grid container my-5">
      {allProducts.map((item, index) => {
          const { id, name, company, price, colors, image } = item;
          return (
            <Cards
              key={index}
              id={id}
              name={item.name}
              company={item.company}
              price={item.price}
              colors={item.colors}
              image={item.image}
              item={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
