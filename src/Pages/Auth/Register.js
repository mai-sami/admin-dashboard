import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import Anckors from '../../Components/AnckorComponent/Anckors';
import Button from '../../Components/Buttons/Button';
import ErrorMessage from '../../Components/ErrorMessages/ErrorMessage';
import InputForms from '../../Components/INPUTandLabels/InputForms';
import Title from '../../Components/Titles/Title';
import { Form } from '../../Style/elments';
import { Flex } from '../../Style/layout';
import { registerSchema } from './Validation';

function Register() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });
    const onSubmit = () => {
        const name = getValues("name")
        const email = getValues("email")
        const password = getValues("password")
        const userData = {
            name,
            email,
            password,
        }
        console.log("nice", userData)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Title name={"SIGN UP"} />
            <InputForms
                text={"Name"}
                placeholder={"Enter Name"}
                type={"name"}
                register={register}
                border={errors?.name ? "red" : "#bababaa0"}
                name="name"
            />
            <ErrorMessage>
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </ErrorMessage>
            <br></br>
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
            <ErrorMessage>
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </ErrorMessage>
            <br></br>
            <Flex>
                <Button
                    name={"SIGN UP"}
                    margin={"2rem"}
                />
            </Flex>
            <Anckors
                text={"Already have an account ?"}
                name={"Login"}
                color={"#FF0000"}
                href={"/login"} />

        </Form>
    )
}

export default Register
