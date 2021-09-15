import React from 'react'

import { styled } from '@material-ui/styles'
import { Button } from '@material-ui/core'


const ButtonSecondary = styled(Button)({
    background:'linear-gradient(45deg, #430c7a 60%, #0739b5 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(67, 12, 122, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
})

export default function StyleButtonSecondary({name}){
    return <ButtonSecondary>{name} </ButtonSecondary>
}
