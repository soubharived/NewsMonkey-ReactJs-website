import React, {} from 'react'
import loadSpinner from '../loadSpinner.gif'
const Spinner =()=> {
  
    return (
      <div className='text-center'>
        <img className='my-3' src={loadSpinner} alt="loading" />
      </div>
    )
  
}
export default Spinner