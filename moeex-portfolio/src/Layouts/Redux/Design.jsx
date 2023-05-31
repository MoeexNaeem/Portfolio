/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './Actions/Actions'

const Design = () => {
    
  return (
    <>
    <div className='container'>
     <button className='btn btn-info'>-</button>
     <input type='text' value="0" className='form-control form_edit'/>
     <button className='btn btn-danger' >+</button>
     </div>
    </>
  )
}

export default Design
