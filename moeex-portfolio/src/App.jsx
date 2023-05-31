import "./App.css";
import Create from "./Layouts/CRUD/Create";
import { Routes, Route } from "react-router-dom";
import Read from "./Layouts/CRUD/Read";
import Edit from "./Layouts/CRUD/Edit";
// import Navbar from './Layouts/Navbar/Navbar'

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/edit" element={<Edit />} />
          <Route path="/read" element={<Read />} />
          <Route path="/" element={<Create />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
