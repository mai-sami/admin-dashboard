import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
 import Button from '../../../Components/atoms/Buttons/Button';
import InputForms from '../../../Components/molecules/INPUTandLabels/InputForms';
import { DetailsSchema } from '../../../Pages/Auth/Validation';
import { Form } from '../../../Style/elments'
import { Div } from '../../../Style/layout';
 
function CustomInputForms({ LineHeight, padding, DataFeild, width, url, margin, Validation }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(DetailsSchema)
    });
    console.log(errors)
    const onSubmit = () => {
        console.log("AAAA")
    }
    return (
        <>
            <Form
                margin={margin}
                display={"flex"}
                padding={padding}
                border={"none"}
                background={"transparent"}
                width={"80%"}
                shadow={"none"}
                onSubmit={handleSubmit(onSubmit)}>
                {/* <InputForms
                            LineHeight={LineHeight}
                            text={"text"}
                            placeholder={"placeholder"}
                            type={"text"}
                            register={register}
                            name={"name"}
                            border={errors?.name ? "red" : "#bababaa0"}
                        />
                          <ErrorMessage>
                            {errors?.name &&
                                <ErrorMessage>{errors?.name.message}</ErrorMessage>}
                        </ErrorMessage> */}
                {DataFeild.map((item) => (
                    <Div
                        justifyContent={"unset"}
                        alignItems={"unset"} width={width}>
                        <InputForms
                            LineHeight={LineHeight}
                            text={item.text}
                            placeholder={item.placeholder}
                            type={"text"}
                            register={register}
                            name={item.name}
                            border={errors?.Test ? "red" : "#bababaa0"}
                            errors={errors}
                        />

                    </Div>

                ))}
                <Div width={"100%"}
                    display={"flex"}>

                    <Button
                        name={"Submit"}
                        margin={"2rem"}
                    />

                </Div>
            </Form>
        </>
    )
}

export default CustomInputForms
