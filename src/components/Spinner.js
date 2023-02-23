import React, { Component } from 'react'
import loading from './spinner1.gif'
import './Spinner.css'

export class Spinner extends Component {
  render() {
    return (
      <div className='load text-center'>
       
       <img src={loading} alt="loading...."/>
      </div>
    )
  }
}

export default Spinner
