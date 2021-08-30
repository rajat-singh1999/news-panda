import React, { Component } from 'react'
import noImage from "./noImage.png"
// import PropTypes from 'prop-types'

export class News extends Component {

    render() {
        return (
            <div>
                <div className="card">
                <img src={this.props.imgURL?this.props.imgURL:noImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><span className="badge bg-dark">{this.props.source}</span> {this.props.title}...</h5>
                    <p className="card-text">{this.props.description}...</p>
                    <p className="card-text" style={{textAlign:"right"}}>{this.props.publishedAt && this.props.publishedAt.slice(0,10)}</p>
                    <p className="card-text" style={{textAlign:"right"}}>Article by <strong> {this.props.author?this.props.author:"Anonymous"}</strong></p>
                    <a href={this.props.newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">{"Full Story"}</a>
                </div>
                </div>
            </div>
        )
    }
}

export default News
