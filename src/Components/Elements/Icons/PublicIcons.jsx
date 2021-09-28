import React from 'react'

import { Button } from '@material-ui/core';
import { Public } from '@material-ui/icons';

const PublicIcons = ({web}) => {
    return (
        <Button
            href={web}
            target="_blank"
            variant="text"
            style={{
                color:"white",
                fontSize:15,
                margin:0,
                padding:0
            }}
            endIcon={<Public
                style={{
                    fontSize:20
                }}/>}>
            </Button>
    )
}

export default PublicIcons