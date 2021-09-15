import React from 'react'

import Title from '../Elements/Title/Title'
import Body from '../Elements/Body/Body'


import './Pages.css'

const Pages = ({title, title1,body}) => {
    return (
        <div className="containerPages">
            <Title id="about" title={title} title1={title1}/>
            <Body body={body} />
        </div>
    )
}

export default Pages
