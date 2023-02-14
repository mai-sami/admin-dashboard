import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { Link } from 'react-router-dom';
import Anckors from '../../Components/AnckorComponent/Anckors';
import Button from '../../Components/Buttons/Button';
import Title from '../../Components/Titles/Title'
import { Anckor, Form, Li } from '../../Style/elments'
import { Flex } from '../../Style/layout';

function Verification() {

    return (
        <Form >
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
                    {/* <Anckor color='#FF0000'>www.loremipsum.com</Anckor> */}
                </Li>
                <br></br>
              
            </>
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
