import React from 'react'
import { Labels } from '../../../Style/elments'
import { Box } from './style'
import close from '../../../assets/close.png'
import open from '../../../assets/arrows.png'

function DropdownList({ name, show,handeShow}) {
  
    return (
        <>
            <Box>
                <Labels fontWeight={"700"}>{name}</Labels>
                {show ?
                    <img src={open} alt="open" onClick={handeShow}/> :
                    <img src={close} alt="close" onClick={handeShow} />
                }
            </Box>
        </>
    )
}

export default DropdownList
