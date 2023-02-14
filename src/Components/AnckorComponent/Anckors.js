import React from 'react'
import { Anckor, Span } from '../../Style/elments'
import { Flex } from '../../Style/layout'

function Anckors({ text, name, href, color }) {
    return (
        <Flex>
            <Span>
                {text}
            </Span>
            <Anckor color={color} href={href}>
                {name}
            </Anckor>
        </Flex>
    )
}

export default Anckors
