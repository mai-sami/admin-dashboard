import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { Link } from 'react-router-dom';
import Anckors from '../../Components/AnckorComponent/Anckors';
import Button from '../../Components/Buttons/Button';
import Title from '../../Components/Titles/Title'
import { Form } from '../../Style/elments'
import { Flex } from '../../Style/layout';

function Verification() {

    return (
        <Form >
            <Title name={"Verification"} />
            
            <Anckors
                 name={"www.loremipsum.com"}
                color={"#FF0000"}
                href={"/register"} />
            <Flex>
                <Link to={"/"}>
                    <Button
                        name={"SUBMIT"}
                        margin={"2rem"}
                    />
                </Link>
            </Flex>
        </Form>
    )
}



export default Verification
