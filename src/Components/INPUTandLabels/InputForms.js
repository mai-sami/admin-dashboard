import React from 'react'
import { InputField, Labels } from '../../Style/elments'

function InputForms({ text, name, border, placeholder, type, margin, register }) {
    return (
        <>
            <Labels >{text}</Labels>
            <InputField
                name={name}
                placeholder={placeholder}
                type={type}
                margin={margin}
                border={border}
                {...register(name)} />
        </>
    )
}

export default InputForms
