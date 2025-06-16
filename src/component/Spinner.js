// import React, { Component } from 'react'
import  loading from './load.gif'

const Spinner =()=> {
    return (
      <div>
        <img src={loading} alt="error" className='w-[20px] h-[20px]' />
      </div>
    )
}
export default Spinner;
