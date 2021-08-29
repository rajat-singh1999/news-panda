import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="text-center">
                <img style={{width:"10%", height:"10%"}} src={loading} alt="loading" />
            </div>
        )
    }
}

export default Spinner
