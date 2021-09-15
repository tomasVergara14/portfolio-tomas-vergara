import React from 'react'
import Title from '../Elements/Title/Title'
import Body from '../Elements/Body/Body'

const Pages = ({title,body}) => {
    return (
        <div>
            <Title title={title}/>
            <Body body={body} />
        </div>
    )
}

export default Pages
