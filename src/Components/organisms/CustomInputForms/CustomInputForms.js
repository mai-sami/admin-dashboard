import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../../../Components/atoms/Buttons/Button';
import InputForms from '../../../Components/molecules/INPUTandLabels/InputForms';
import { Form } from '../../../Style/elments'
import { Div } from '../../../Style/layout';
import * as yup from "yup";
import Title from '../../atoms/Titles/Title';
 
function CustomInputForms({
    nameButton, border,
    TitleName, widthForm,
    AnckorText, shadow,
    background, display,
    LineHeight, children,
    padding, DataFeild,
    width, margin, actionApi }) {

    const yupList = {};
    DataFeild.forEach((item) => {
        yupList[item.name] = item.yup;
    });
    const DetailsSchema = yup.object().shape(yupList);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(DetailsSchema)
    });
    const onSubmit = (data) => {
        actionApi(data)
    }
    return (
        <>
            <Form
                margin={margin}
                display={display}
                padding={padding}
                border={border}
                background={background}
                width={widthForm}
                shadow={shadow}
                onSubmit={handleSubmit(onSubmit)}>
                <Title name={TitleName} />
                {DataFeild.map((item) => (
                    <Div
                        justifyContent={"unset"}
                        alignItems={"unset"}
                        width={width} key= {item.name}>
                        <InputForms
                            LineHeight={LineHeight}
                            text={item.text}
                            placeholder={item.placeholder}
                            type={item.type}
                            register={register}
                            name={item.name}
                            errors={errors} />
                    </Div>
                ))}
                {children}
                <Div width={"100%"}
                    display={"flex"}>
                        <Button
                            name={nameButton}
                            margin={"2rem"}
                        />
                </Div>
                {AnckorText}
            </Form>
        </>
    )
}

export default CustomInputForms
