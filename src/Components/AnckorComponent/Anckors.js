import React from 'react'
import { Anckor, Span } from '../../Style/elments'
import { Flex } from '../../Style/layout'

function Anckors({ text, name, href, color,justifyContent }) {
    return (
        <Flex justifyContent={justifyContent}>
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
