/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import '../Remote/Remote.css'
import List from "./List";
import Search from "./Search";

const Forms = () => {


const [data, setData] = useState([]);

const [searchQuery, setSearchQuery] = useState('')

const [moviename, setMovieName] = useState('');
const [duration, setDuration] = useState('');
const [ratings, setRatings] = useState('');

const handleChange = (e) => {
  if (e.target.name === 'moviename') {
    setMovieName(e.target.value);
  } else if (e.target.name === 'duration') {
    setDuration(e.target.value);
  }
  else if (e.target.name === 'ratings') {
    setRatings(e.target.value);
  }
}

const handleData = (e) => {
  e.preventDefault();
  setData([...data, { moviename, duration, ratings }]);
  setMovieName('');
  setDuration('');
  setRatings('');
}

const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};

  return (
    <>
      <div className="container my-5">
       <form onSubmit={handleData}>
       <div className="col-mb-4">
          <label className="form-label">Movie Name</label>
          <input
            type="text"
            className="form-control"
            value={moviename}
            name='moviename'
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration</label>
          <input
            type="text"
            className="form-control"
            value={duration}
            name='duration'
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ratings</label>
          <input
            type="number"
            className="form-control"
            value={ratings}
            name='ratings'
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
       </form>
       <Search data={data}/>
       </div>
    </>
  );
};

export default Forms;
