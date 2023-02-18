import React from 'react'
import { InputField, Labels } from '../../../Style/elments'
import { DivElements } from '../../../Style/layout'
import ErrorMessage from '../../atoms/ErrorMessages/ErrorMessage'

function InputForms({ name, LineHeight, text, border, placeholder, type, margin, register, width, errors, ErrorName }) {
    console.log(errors, "errors")
    return (
        <DivElements LineHeight={LineHeight}>
            <Labels >{text}</Labels>
            <InputField
                name={name}
                width={width}
                placeholder={placeholder}
                type={type}
                margin={margin}
                border={border}
                {...register(name)} />
            <ErrorMessage>
                {errors?.name &&
                    <ErrorMessage>{errors?.name.message}</ErrorMessage>}
            </ErrorMessage>
        </DivElements>
    )
}

export default InputForms
