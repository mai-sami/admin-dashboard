import React from 'react'
import { InputField, Labels } from '../../../Style/elments'
import { DivElements } from '../../../Style/layout'
import ErrorMessage from '../../atoms/ErrorMessages/ErrorMessage'

function InputForms({ name, LineHeight, text, placeholder, type, margin, register, width, errors }) {
    return (
        <DivElements LineHeight={LineHeight}>
            <Labels >{text}</Labels>
            <InputField
                name={name}
                width={width}
                placeholder={placeholder}
                type={type}
                margin={margin}
                border={errors[name] ? "red" : "#bababaa0"}
                {...register(name)} />
            <ErrorMessage>
                {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
            </ErrorMessage>
        </DivElements>
    )
}

export default InputForms
