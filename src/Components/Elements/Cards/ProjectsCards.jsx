import React from 'react'


import { motion } from "framer-motion"

import { Card } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import GitHubIcons from '../Icons/GitHubIcons'
import PublicIcons from '../Icons/PublicIcons'


const ProjectsCards = ({projectName, tech, image, link, web}) => {
    return (
        <motion.div 
        component="span"
        style={{
            width:"80%",
            margin:6,
            height:"98%",
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            maxHeight: { xs: 203, md: 107 },
            maxWidth: { xs: 320, md: 200 },
        }}
        whileHover={{
            scale: 1.1,
            transition: { duration: .8 },
            backgroundColor:"#151932"
          }}>
            <Card style={{
                width:"100%",
                display:"flex", justifyContent:"space-around", alignContent:"center", flexWrap:"wrap",
                backgroundColor:"#151932",
                color:"white"
            }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt="Paella dish"
                />
                <Typography
                variant="h5" component="h5" 
                style={{ backgroundColor:"#0000004d", width:"50%",color:"white"}}>
                    {projectName}  
                </Typography>
                <Typography style={{ display:"flex", justifyContent:"space-around", alignContent:"center", backgroundColor:"#0000004d", width:"50%"}} > <GitHubIcons link={link} /> <PublicIcons  web={web}/> </Typography>
                <Typography
                variant="body2" component="body2" 
                style={{ backgroundColor:"#0000004d", width:"100%",color:"white"}}>
                    {tech}  
                </Typography>
            
            </Card>
            
        </motion.div>
    )
}

export default ProjectsCards
