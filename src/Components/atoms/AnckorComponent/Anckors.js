import React from 'react'
import { Anckor, Span } from '../../../Style/elments'
import { Flex } from '../../../Style/layout'

function Anckors({ fontWeight, text, name, href, color, justifyContent, marginLeft }) {
    return (
        <Flex marginLeft={marginLeft} justifyContent={justifyContent}>
            <Span fontWeight={fontWeight}>
                {text}
            </Span>
            <Anckor color={color} href={href}>
                {name}
            </Anckor>
        </Flex>
    )
}

export default Anckors
