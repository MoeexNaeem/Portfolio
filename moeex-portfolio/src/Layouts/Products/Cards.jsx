/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../Products/AllProducts.css";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cards = (props) => {
  const { addItem } = useCart();
  return (
    <div>
      <main className="grid container my-5 text-center">
        <div className="col-10 mx-auto my-3 ">
          <div className="card card_size">
            <img src={props.image} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.company}</p>
              <p className="card-text">{props.price}</p>
              <NavLink to="#" className="btn btn-primary">
                <button onClick={() => {
                      addItem(props.item);
                    }}> Add To Cart</button>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cards;
