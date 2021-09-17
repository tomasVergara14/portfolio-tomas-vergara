import React from 'react'

import { Button } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';



const AboutMeIcon = () => {
    return (
            <Button
            variant="text"
            style={{
                color:"white",
                fontSize:30
            }}
            endIcon={<AccountCircleOutlinedIcon
                style={{
                    fontSize:50
                }}/>}>
                    About Me
            </Button>
    )
}

export default AboutMeIcon
