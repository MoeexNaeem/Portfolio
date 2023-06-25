/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import Create from "./Layouts/CRUD/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Layouts/CRUD/Read";
import Edit from "./Layouts/CRUD/Edit";
import Navbar from "./Layouts/Products/Navbar";
import Products from "./Layouts/Products/Products";
import Cart from "./Layouts/Products/Cart";
import MyComponent from "./Layouts/Redux-Toolkit/MyComponent";
import AdminPanel from "./Layouts/Admin-Pannel/AdminPanel";
import ProductCard from "./Layouts/Admin-Pannel/ProductCard";
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Layouts/Admin-Pannel/Features/productsSlice";
import Forms from "./Layouts/Remote/Forms";
// import Navbar from './Layouts/Navbar/Navbar'

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

function App() {

  const products = store.getState().products;


  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Routes>       
        <Route path="/" element={<Forms/>} /> 
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="/cards" element={<ProductCard/>} />

        {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}

        <Route path="/components" element={<MyComponent />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
