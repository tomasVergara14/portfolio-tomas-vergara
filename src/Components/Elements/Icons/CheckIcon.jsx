import React from 'react'

import { Button } from '@material-ui/core'
import { Check } from '@material-ui/icons'


const CheckIcon = () => {
    return (
            <Button
            href={`#about`}
            variant="text"
            style={{
                color:"white",
                fontSize:30,
            }}
            endIcon={<Check
                style={{
                    fontSize:50
                }}/>}>
                    
            </Button>
    )
}

export default CheckIcon
