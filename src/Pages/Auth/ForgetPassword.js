import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../Components/Buttons/Button';
import ErrorMessage from '../../Components/ErrorMessages/ErrorMessage';
import InputForms from '../../Components/INPUTandLabels/InputForms';
import Title from '../../Components/Titles/Title'
import { Form } from '../../Style/elments'
import { Flex } from '../../Style/layout';
import { loginSchema } from './Validation';

function ForgetPassword() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const onSubmit = () => {
        const email = getValues("email")
        console.log("email is", email)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Title name={"FORGOT PASSWORD"} />
            <InputForms
                text={"Email ID"}
                placeholder={"Enter Email ID"}
                type={"email"}
                register={register}
                border={errors?.email ? "red" : "#bababaa0"}
                name="email"
            />
            <ErrorMessage>
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </ErrorMessage>
            <Flex>
                <Link to={"/verification"}>
                <Button
                    name={"SUBMIT"}
                    margin={"2rem"}
                    />
                    </Link>
            </Flex>
        </Form>
    )
}

export default ForgetPassword
