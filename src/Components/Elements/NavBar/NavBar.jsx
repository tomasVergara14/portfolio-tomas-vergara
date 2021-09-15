import React from 'react'
import './NavBar.css'

import { styled } from '@material-ui/styles'
import { Button } from '@material-ui/core'

import StyleButtonNavBar from '../Buttons/ButtonNavBar'

const NavBar = () => {
    return (
        <div className="containerButtonsNavBar">
            <StyleButtonNavBar name ="home"/>
            <StyleButtonNavBar name ="about"/>
            <StyleButtonNavBar name ="projects"/>
            <StyleButtonNavBar name ="contact"/>
        </div>
        
    )
}

export default NavBar
