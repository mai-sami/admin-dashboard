import React from 'react'
import { TitleText } from '../../../Style/elments'

function Title({ name ,color,marginBottom,fontSize,fontWeight ,margin}) {
    return (
        <TitleText 
        fontWeight={fontWeight}
         fontSize={fontSize} 
         marginBottom={marginBottom} 
         margin={margin} 
         color ={color}>
            {name}
        </TitleText>
    )
}

export default Title
