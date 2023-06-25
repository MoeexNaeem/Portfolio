/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import '../Remote/Remote.css'

const Search = ({data}) => {

  const [showError, setShowError] = useState(true);

  const convertMinutesToHours = (duration) => {
    if (!duration) {
      // Duration not specified, display error alert if not shown before
      if (showError) {
        alert('Duration is required');
        setShowError(false);
      }
      return '';
    }

    const durationString = duration.toString().trim().toLowerCase();

    if (durationString.endsWith('min')) {
      const minutes = parseInt(durationString, 10);
      if (isNaN(minutes)) {
        // Invalid input, display error alert if not shown before
        if (showError) {
          alert('Invalid duration value');
          setShowError(false);
        }
        return '';
      }
      return `${minutes}min`;
    } else if (durationString.endsWith('hrs') || durationString.endsWith('hr') || durationString.endsWith('h')) {
      const hours = parseFloat(durationString);
      if (isNaN(hours)) {
        // Invalid input, display error alert if not shown before
        if (showError) {
          alert('Invalid duration value');
          setShowError(false);
        }
        return '';
      }
      return `${hours}hrs`;
    } else {
      // Invalid input format, display error alert if not shown before
      if (showError) {
        alert('Invalid duration format');
        setShowError(false);
      }
      return '';
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((data) =>
    data.moviename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className='my-3'>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search username"
      />
      <div className='my-5 grid'>
        {filteredData.map((data, index) => (
          <div key={index}>
            <div className="data_length">
                <h5 className="text-center my-4">{data.moviename}</h5>
                <h6 className="text-center my-2">{convertMinutesToHours(data.duration)}</h6>
                <h5 className="text-center m-2">{data.ratings}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Search
