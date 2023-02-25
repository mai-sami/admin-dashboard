import React from 'react'
import { Flex } from '../../../Style/layout'
import { Box } from './style'

function Tab({show,upload, handelShow, toggleTab }) {
    return (
        <Flex margin={"auto"} width={"70%"}>
            <Box
                height={"60px"}
                border={"1px solid #8F8F8F;"}
                margin={"2rem 0 0 0"}
                borderRadius={"6px 0 0 6px"}
                background={show?"#EBEBF0":"#FFFFFF"}
                onClick={handelShow} >
                Manual data  tab
            </Box>
            <Box
                height={"60px"}
                border={"1px solid #8F8F8F;"}
                margin={"2rem 0 0 0 "}
                background={upload?"#EBEBF0":"#FFFFFF"}
                borderRadius={"0 6px 6px  0"}
                onClick={toggleTab}>
                Bulk upload tab
            </Box>
        </Flex>
    )
}
export default Tab
