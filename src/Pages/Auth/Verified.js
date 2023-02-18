import React from 'react'
  import { Form } from '../../Style/elments'
import Vector from '../../assets/Vector.png'
import { Flex } from '../../Style/layout'
import { Link } from 'react-router-dom'
import Title from '../../Components/atoms/Titles/Title'
import Button from '../../Components/atoms/Buttons/Button'
function Verified() {
    return (
        <Form>
            <Flex flexDirection={"column"}>
                <Title name={"Verified"} />
                <img src={Vector} alt="Vector" />
                <Link to={'/'}>
                    <Button
                        name={"NEXT"}
                        margin={"2rem"}
                    />
                </Link>
            </Flex>
        </Form>
    )
}

export default Verified
