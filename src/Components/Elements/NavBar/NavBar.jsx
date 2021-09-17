import React from 'react'
import './NavBar.css'

import StyleButtonNavBar from '../Buttons/ButtonNavBar'

const NavBar = () => {
    return (
        <>
        <div className="containerButtonsNavBar">
            <StyleButtonNavBar name ="home"/>
            <StyleButtonNavBar name ="about"/>
            <StyleButtonNavBar name ="skills"/>
            <StyleButtonNavBar name ="projects"/>
            <StyleButtonNavBar name ="contact"/>
        </div>
        <div className="containerAltNavBar">
            <StyleButtonNavBar name ="contact"/>
        </div>
        </>
    )
}

export default NavBar
