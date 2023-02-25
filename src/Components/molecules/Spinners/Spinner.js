import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Flex } from '../../../Style/layout'

function Spinner() {
    return (
        <Flex margin={"20rem 0rem 0rem 0rem "}>
   <RotatingLines
            strokeColor="#0f0f0f"
            strokeWidth="4"
            animationDuration="4"
            width="120"
            height="130"
            visible={true}
        />
        </Flex>
      
    )
}

export default Spinner
