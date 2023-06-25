/* eslint-disable no-unused-vars */
import React from 'react'
import "../Navbar/Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Moeex Naeem</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/testmonials">Testmonial</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/blogs">Blog</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <NavLink className='nav-button text-center'>
          <button className="nav-login">Welcome</button>
        </NavLink>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
