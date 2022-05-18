import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
      let {title,desc,imageurl,newsurl,author,date} = this.props;
    return (
      <div className="my-2">
          <div className="card">
  <img src={!imageurl?'https://www.aljazeera.com/wp-content/uploads/2022/05/2022-05-12T152519Z_1452650659_RC2K9N95GSJT_RTRMADP_3_SPACE-EXPLORATION-PLANTS.jpg?resize=1200%2C630':imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Anonymous":author} on {new Date(date).toGMTString()} </small></p>
    <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems