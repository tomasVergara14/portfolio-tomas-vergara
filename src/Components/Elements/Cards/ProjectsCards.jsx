import React from 'react'


import { motion } from "framer-motion"

import { Box, Card } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import GitHubIcons from '../Icons/GitHubIcons'
import PublicIcons from '../Icons/PublicIcons'


const ProjectsCards = ({projectName, image, link, web}) => {
    return (
        <motion.div 
        component="span"
        style={{
            width:"45%",
            margin:6,
            display:"flex",
            height: "50%",
            maxHeight: { xs: 203, md: 107 },
            maxWidth: { xs: 320, md: 200 },
        }}
        whileHover={{
            scale: 1.2,
            transition: { duration: .8 },
            backgroundColor:"#4956a6"
          }}>
            <Card style={{
                width:"100%",
                display:"flex", justifyContent:"space-around", alignContent:"center", flexWrap:"wrap",
            }}>
                <CardMedia
                    component="img"
                    height="124"
                    image={image}
                    alt="Paella dish"
                />
                <Typography
                style={{ width:"50%"}}>
                    {projectName}  
                </Typography>
                <Typography style={{width:"50%"}} > <GitHubIcons link={link} /> <PublicIcons  web={web}/> </Typography>
            
            </Card>
            
        </motion.div>
    )
}

export default ProjectsCards
