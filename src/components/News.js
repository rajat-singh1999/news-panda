import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class News extends Component {

    render() {
        
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                <img src={this.props.imgURL?this.props.imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}...</h5>
                    <p className="card-text">{this.props.description}...</p>
                    <a href={this.props.newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">{"Full Story"}</a>
                </div>
                </div>
            </div>
        )
    }
}

export default News
