import React from 'react'

import { Button } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';

const LinkedInIcons = ({linkedIn}) => {
    return (
        <Button
            href={linkedIn}
            target="_blank"
            variant="text"
            style={{
                color:"white",
                fontSize:15,
                margin:0,
                padding:0
            }}
            endIcon={<LinkedIn
                style={{
                    fontSize:20
                }}/>}>
            </Button>
    )
}

export default LinkedInIcons