import React from 'react'
import { ErrorMess } from '../../../Style/other'

function ErrorMessage({ children }) {
    return (
        <ErrorMess>
            {children}
        </ErrorMess>
    )
}

export default ErrorMessage
