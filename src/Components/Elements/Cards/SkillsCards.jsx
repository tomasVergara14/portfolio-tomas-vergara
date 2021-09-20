import React from 'react'

import { motion } from "framer-motion"

import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'

const SkillsCards = ({skill}) => {
    

    return (
        <motion.div component="span"
        style={{
            backgroundColor:"#28305f",
            display:"flex",
            margin:4
        }}
        whileHover={{
            scale: 1.2,
            transition: { duration: .7 },
            backgroundColor:"#4956a6"
          }} >
            <CardContent>
                <Typography variant="h6" component="p" >{skill}</Typography>
            </CardContent>
        </motion.div>
    )
}

export default SkillsCards
