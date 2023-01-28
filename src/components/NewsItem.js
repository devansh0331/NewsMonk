import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {

  

  render() {

    let {title , desc , imageURL ,newsURL} = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageURL?imageURL:"https://assets3.cbsnewsstatic.com/hub/i/r/2023/01/25/5041d6ac-daa4-49e7-afc3-24e1fa2b1fb2/thumbnail/1200x630/cc1035a20c2c1d33d1a7f231bf5b12c6/netflix-gettyimages-1246478948.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{desc}...</p>
    <a href={newsURL} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
