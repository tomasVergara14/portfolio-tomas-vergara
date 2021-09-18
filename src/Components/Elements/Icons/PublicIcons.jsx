import React from 'react'

import { Button } from '@material-ui/core';
import { Public } from '@material-ui/icons';

const PublicIcons = ({web}) => {
    return (
        <Button
            href={web}
            variant="text"
            style={{
                color:"black",
                fontSize:10,
            }}
            endIcon={<Public
                style={{
                    fontSize:20
                }}/>}>
            </Button>
    )
}

export default PublicIcons