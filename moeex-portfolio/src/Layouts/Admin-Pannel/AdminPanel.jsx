/* eslint-disable no-unused-vars */
// AdminPanel.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './Features/productsSlice';

const AdminPanel = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [company, setCompany] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
      company,
      image,
    };

    dispatch(addProduct(product));

    // Reset the form
    setName('');
    setPrice('');
    setCompany('');
    setImage('');
  };


  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Company:
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPanel;
