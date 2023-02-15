import React from 'react'
import { ButoonLogin } from '../../Style/elments'

function Button({ onClick, margin, border, background, 
    name, color, width, marginTop, padding, borderRuidus , position
 }) {
    return (
        
        <ButoonLogin
            padding={padding}
            borderRuidus={borderRuidus}
            marginTop={marginTop}
            width={width}
            color={color}
            background={background}
            border={border}
            margin={margin}
            onClick={onClick}
            position={position}
            type="submit"
        >
            {name}
        </ButoonLogin>
    )
}

export default Button
