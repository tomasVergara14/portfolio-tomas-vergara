import React from 'react'

import { Button } from '@material-ui/core'
import { EmojiEvents } from '@material-ui/icons'

const SkillsIcons = () => {
    return (
        <Button
            href={`#skills`}
            variant="text"
            style={{
                color:"white",
                fontSize:30,
            }}
            endIcon={<EmojiEvents
                style={{
                    fontSize:50
                }}/>}>
                    Skills
            </Button>
    )
}

export default SkillsIcons
