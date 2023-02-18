import React from 'react'
import { Link } from 'react-router-dom'
import { Hr } from '../../../Style/elments'
import { Flex } from '../../../Style/layout'
import Button from '../Buttons/Button'

function LineButton({ name,urls }) {
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
            <Hr></Hr>
        </Flex>
    )
}

export default LineButton
