import React from 'react'
import chart from '../../../assets/Group 17.png'
import { Div } from '../../../Style/layout'
function Chart() {
    return (
        <Div width={"80%"} display={"flex"} justifyContent={"space-between"}>
        <img src={chart} alt="chart" />
        <img src={chart} alt="chart" />
        </Div>
    )
}

export default Chart
