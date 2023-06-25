import "./App.css";
import Navbar from "./Layouts/Navbar/Navbar";
import Hero from "./Layouts/Hero/Hero";
import About from "./Layouts/About/About";
import Service from "./Layouts/Works/Service";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Layouts/Portfolio/Portfolio";
import Testmonials from "./Layouts/Testmonials/Testmonials";
import Blogs from "./Layouts/Blogs/Blogs";
import Contact from "./Layouts/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testmonials" element={<Testmonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
