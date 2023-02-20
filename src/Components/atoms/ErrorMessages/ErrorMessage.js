import React from 'react'
import { ErrorMess } from '../../../Style/layout'
 
function ErrorMessage({ children }) {
    return (
        <ErrorMess>
            {children}
        </ErrorMess>
    )
}

export default ErrorMessage
