import React, { useState } from 'react'
import Anckors from '../../Components/atoms/AnckorComponent/Anckors';
import Button from '../../Components/atoms/Buttons/Button';
import Title from '../../Components/atoms/Titles/Title';
import { Form, Li } from '../../Style/elments'
import { Flex } from '../../Style/layout';
import Verified from './Verified';

function Verification() {
    const [show, setShow] = useState(false)
    if (show === true)
        return <Verified />
    const handelShow = () => {
        setShow(!show)
    }
    return (
        <Form>
            <Title name={"Verification"} />
            <>
                <Li>
                    You are sing up with this account please verify
                    <Anckors
                        fontWeight={"500"}
                        marginLeft={"1.5"}
                        justifyContent={"left"}
                        text={"by this link"}
                        name={"www.loremipsum.com"}
                        color={"#FF0000"}
                        href={"/www.loremipsum.com"} />
                </Li>
                <br></br>

            </>
            <Flex>
                <Button
                    name={"SUBMIT"}
                    margin={"2rem"}
                    onClick={handelShow}
                />
            </Flex>
        </Form>
    )
}



export default Verification
