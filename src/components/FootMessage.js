import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class FootMessage extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div className="Contianer text-center my-5">
                <h3 style={{color:"white"}}>{`You are all caught up for ${this.props.category} news. Checkout other topic!`}</h3>
            </div>
        )
    }
}

export default FootMessage
