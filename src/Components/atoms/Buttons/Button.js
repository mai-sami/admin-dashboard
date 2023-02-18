import React from 'react'
import { ButoonLogin } from '../../../Style/elments'

function Button({right, position, top, onClick, margin, border, background,
    name, color, width, marginTop, padding, borderRuidus, height
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
            height={height}
             top={top}
             right={right}
            type="submit"
        >
            {name}
        </ButoonLogin>
    )
}

export default Button
