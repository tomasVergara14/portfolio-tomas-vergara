import React from 'react'

import { Button } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

const GitHubIcons = ({link}) => {
    return (
        <Button
            href={link}
            variant="text"
            style={{
                color:"black",
                fontSize:10,
            }}
            endIcon={<GitHub
                style={{
                    fontSize:20
                }}/>}>
            </Button>
    )
}

export default GitHubIcons