import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Newsitem extends Component {
  static propTypes = {

  }

  render() {
    let {title,description,imgurl,Myurl} =this.props;
    return (
      <div className="container">
<div>
<div className="card">
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={Myurl} target="_blank" className="btn btn-dark">Read more</a>
  </div>
</div>
</div>
      </div>
    )
  }
}

export default Newsitem
