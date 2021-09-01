import React from 'react'
import noImage from "./noImage.png"
// import PropTypes from 'prop-types'

const News = (props)=>{
    return (
        <div>
            <div className="card">
                <img src={props.imgURL ? props.imgURL : noImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><span className="badge bg-dark">{props.source}</span> {props.title}...</h5>
                    <p className="card-text">{props.description}...</p>
                    <p className="card-text" style={{ textAlign: "right" }}>{props.publishedAt && props.publishedAt.slice(0, 10)}</p>
                    <p className="card-text" style={{ textAlign: "right" }}>Article by <strong> {props.author ? props.author : "Anonymous"}</strong></p>
                    <a href={props.newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">{"Full Story"}</a>
                </div>
            </div>
        </div>
    )

}

export default News
