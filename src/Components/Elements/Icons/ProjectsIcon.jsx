import React from 'react'

import { Button } from '@material-ui/core';
import { Computer } from '@material-ui/icons';

const ProjectsIcon = () => {
    return (
        <Button
            href={`#projects`}
            variant="text"
            style={{
                color:"white",
                fontSize:30,
            }}
            endIcon={<Computer
                style={{
                    fontSize:50
                }}/>}>
                    Projects
            </Button>
    )
}

export default ProjectsIcon
