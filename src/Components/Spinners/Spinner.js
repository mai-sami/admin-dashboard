import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Spinner() {
    return (
        <RotatingLines
            strokeColor="#d90fb6"
            strokeWidth="4"
            animationDuration="4"
            width="120"
            height="130"
            visible={true}
        />
    )
}

export default Spinner
