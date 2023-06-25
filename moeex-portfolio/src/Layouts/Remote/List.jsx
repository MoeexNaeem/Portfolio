/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../Remote/Remote.css'

const List = ({data}) => {

  return (
    <>
        <div className="my-5 grid">
        {data.map((add, index) => (
        <div key={index}>
          <div className="data_length">
                <h5 className="text-center my-4">{add.moviename}</h5>
                <h6 className="text-center my-2">{add.duration}</h6>
                <h5 className="text-center m-2">{add.ratings}</h5>
            </div>
        </div>
      ))}
        </div>
        
    </>
  )
}

export default List
