import React from 'react'

import Body from '../Elements/Body/Body'


import './Pages.css'

const Pages = ({title, title1,body}) => {
    return (
        <div className="containerPages">
            <Body  body={body} />
        </div>
    )
}

export default Pages
