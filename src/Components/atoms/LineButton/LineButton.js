import React from 'react'
import { Link } from 'react-router-dom'
 import { Flex } from '../../../Style/layout'
import Button from '../Buttons/Button'

function LineButton({ name,urls ,children}) {
    return (
        <Flex
            justifyContent={"right"}
            alignItems={"end"}
            flexDirection={"column"}
            width={"100%"}
        >
            <Link to={urls}>
                <Button
                    width={"140px"}
                    name={name}
                    margin={"1rem"}
                />
            </Link>
           {children}
        </Flex>
    )
}

export default LineButton
