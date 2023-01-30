import React, { Component } from 'react'
import loading from './loading.gif'
import './Spinner.css'

export class Spinner extends Component {
  render() {
    return (
      <div>
        {/* <img src={loading} alt="loading..."/> */}
        <div className="lds-hourglass">45455</div>
      </div>
    )
  }
}

export default Spinner
