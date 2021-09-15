import React from 'react'
import Title from '../Elements/Title/Title'
import Body from '../Elements/Body/Body'

import './Pages.css'

const Pages = ({title,body}) => {
    return (
        <div className="containerPages">
            <Title title={title}/>
            <Body body={body} />
        </div>
    )
}

export default Pages
