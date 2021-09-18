import React from 'react'

import { Box, Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import GitHubIcons from '../Icons/GitHubIcons'
import PublicIcons from '../Icons/PublicIcons'


const ProjectsCards = ({projectName, image, link, web}) => {
    return (
        <Box 
        component="span"
        sx={{
            width:"45%",
            margin:6,
            display:"flex",
            height: "50%",
            maxHeight: { xs: 203, md: 107 },
            maxWidth: { xs: 320, md: 200 },
        }}>
            <Card style={{
                width:"100%"
            }}>
                <CardMedia
                    component="img"
                    height="124"
                    image={image}
                    alt="Paella dish"
                />
                <Typography>{projectName} <GitHubIcons link={link} /> <PublicIcons  web={web}/> </Typography>
            
            </Card>
            
        </Box>
    )
}

export default ProjectsCards
