import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {



  render() {

    let { title, desc, imageURL, newsURL, author, date,source } = this.props
    return (
      <div>
        <div className="card" style={{ width: "18rem"}}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>
            {source}
            <span class="visually-hidden">unread messages</span></span>
          <img src={imageURL ? imageURL : "https://th.bing.com/th/id/OIP.fHJwQ0X0TjvEbdA8nvx_8QHaIm?pid=ImgDet&rs=1"} height="200px" width="200px" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{desc}...</p>
            <p class="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
