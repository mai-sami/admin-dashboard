import React from 'react'
import {Flex } from '../../../Style/layout'
import Title from '../../atoms/Titles/Title'
function Chart({ DataCharts }) {
    return (
        <Flex margin={"2rem auto auto auto"}
            flexWrap={"wrap"}
            width={"90%"}
            display={"flex"}
            justifyContent={"space-between"}>
            {DataCharts?.map(item => (
                <Flex alignItems={"flex-start"} flexDirection={"column"}>
                    <Title margin={'1'} name={item.name} />
                    <img style={{ width: "100%" }} src={item.image} alt="chart" />
                </Flex>
            ))}
        </Flex>
    )
}

export default Chart
