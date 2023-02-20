import React from 'react'
import { useHistory } from 'react-router-dom'
import notFound from '../assets/Group 491.png'
import Button from '../Components/atoms/Buttons/Button'
import { Image } from '../Style/elments'
import { Flex } from '../Style/layout'
function NotFound(props) {
    const history = useHistory()
    return (
        <Flex
            flexDirection={"column"}
            margin={"4rem 0rem 0rem 0rem "}>
            <Image src={notFound} alt="notFound" />
            <Button
                name={" Go Home"}
                margin={"5rem"}
                height={"55px"}
                width={"200px"}
                onClick={() => history.push("/")}
            />
        </Flex>
    )
}

export default NotFound
