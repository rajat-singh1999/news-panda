import React from 'react'
// import PropTypes from 'prop-types'

const FootMessage = (props)=>{
    
        return (
            <div className="Contianer text-center my-5">
                <h3 style={{color:"white"}}>{`You are all caught up for ${props.category} news. Browse other topics!`}</h3>
            </div>
        )
}



export default FootMessage
