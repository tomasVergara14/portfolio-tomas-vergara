import React from 'react'

import './Title.css'

const Title = ({title, title1}) => {
    return (
        <div className="title">
            <h2>{title} </h2>
            <h2>{title1} </h2>
        </div>
    )
}

export default Title
