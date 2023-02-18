import React from 'react'
import { useForm } from 'react-hook-form';
import { Form } from '../../Style/elments'
import { loginSchema } from './Validation';
import { Flex } from '../../Style/layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer } from 'react-toastify';
import UseAuth from '../../Hooks/UseAuth';
import ErrorMessage from '../../Components/atoms/ErrorMessages/ErrorMessage';
import InputForms from '../../Components/molecules/INPUTandLabels/InputForms';
import Spinner from '../../Components/molecules/Spinners/Spinner';
import Title from '../../Components/atoms/Titles/Title';
import Anckors from '../../Components/atoms/AnckorComponent/Anckors';
import Button from '../../Components/atoms/Buttons/Button';

function Login() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const { loginAction, isLoading } = UseAuth()
    const onSubmit = () => {
        const email = getValues("email")
        const password = getValues("password")
        const userData = {
            email,
            password,
        }
        loginAction(userData)
    }
    return (
        <>
            <ToastContainer />
            {isLoading ? <Spinner /> :
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
            }
        </>
    )
}

export default Login
