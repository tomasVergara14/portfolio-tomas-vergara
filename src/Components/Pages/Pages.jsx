import React from 'react'

import Title from '../Elements/Title/Title'
import Body from '../Elements/Body/Body'

import StyleButton from '../Elements/Buttons/ButtonPrimary'
import ButtonSecondary from '../Elements/Buttons/ButtonSecondary'

import './Pages.css'

const Pages = ({title,body}) => {
    return (
        <div className="containerPages">
            <Title title={title}/>
            <Body body={body} />
            <StyleButton name="Hola" />
            <ButtonSecondary name="Hola"/>
        </div>
    )
}

export default Pages
