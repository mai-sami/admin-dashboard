import React from 'react'
import { useForm } from 'react-hook-form';
import InputForms from '../../Components/INPUTandLabels/InputForms'
import Title from '../../Components/Titles/Title'
import { Form } from '../../Style/elments'
import { loginSchema } from './Validation';
import ErrorMessage from '../../Components/ErrorMessages/ErrorMessage';
import Button from '../../Components/Buttons/Button';
import Anckors from '../../Components/AnckorComponent/Anckors';
import { Flex } from '../../Style/layout';
import { yupResolver } from '@hookform/resolvers/yup';

function Login() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const onSubmit = () => {
        const email = getValues("email")
        const password = getValues("password")
        const userData = {
            email,
            password,
        }
        console.log("nice", userData)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Title name={"LOG IN"} />
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
            <br></br>
            <InputForms
                text={"Password"}
                placeholder={"Enter password"}
                type={"password"}
                register={register}
                border={errors?.password ? "red" : "#bababaa0"}
                name="password"

            />
 
                <Anckors
                justifyContent={"right"}
                    name={"Forgotpassword ?"}
                    color={"#000000"}
                    href={"/forgetPassword"} />

            <ErrorMessage>
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </ErrorMessage>
            <Flex>
                <Button
                    name={"LOG IN"}
                    margin={"2rem"}
                />
            </Flex>
            <Anckors
                text={"Don’t have an account ?"}
                name={"Sign up"}
                color={"#FF0000"}
                href={"/register"} />

        </Form>
    )
}

export default Login
