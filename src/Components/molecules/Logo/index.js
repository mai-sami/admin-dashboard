import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/Ellipse 1.png'
import { Flex } from '../../../Style/layout'
import Button from '../../atoms/Buttons/Button'
function Index() {
    const [show, serShow] = useState(false)
    const handelShow = () => {
        serShow(!show)
    }
    return (
        <Flex flexDirection={"column"} >
            <img src={Logo} alt={"Logo"} style={{ width: "100%",height:"100%"}} onClick={handelShow} />
            {show ?
                <Link to={'/profile-details'}>
                    <Button
                        name={"Profile Details"}
                        margin={"2rem"}
                        top={"66px"}
                        position={"absolute"}
                        right={"0px"}
                        background={"#EFEFEF"}
                        color={"#000000"}
                    />
                </Link>

                : ""}
        </Flex>
    )
}

export default Index
