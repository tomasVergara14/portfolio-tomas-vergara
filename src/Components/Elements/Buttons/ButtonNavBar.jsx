import React from 'react'

import { styled } from '@material-ui/styles'
import { Button } from '@material-ui/core'


const ButtonNavBar = styled(Button)({
    border: 0,
    color: 'white',
    height: 48,
    fontWeight:200,
    padding: '0 30px',
})

export default function StyleButtonNavBar({name}){
    return <ButtonNavBar href={`#${name}`} >{name} </ButtonNavBar>
}