import React from 'react'

import { Box } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardActions } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'

const SkillsCards = ({skill}) => {
    

    return (
        <Box component="span"
        sx={{
            backgroundColor:"#28305f",
            display:"flex",
            margin:4
        }} >
            <CardContent>
                <Typography variant="h6" component="p" >{skill}</Typography>
            </CardContent>
        </Box>
    )
}

export default SkillsCards
