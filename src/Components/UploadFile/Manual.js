import React, { useState } from 'react'
import { ListData } from '../../../Mock/mock'
import { Flex } from '../../../Style/layout'
import DropdownList from '../../atoms/Tabs/DropdownList'
import { Box } from '../../atoms/Tabs/style'

function Manual() {
    const [show, seshow] = useState(true)
    const handeShow = () => {
        seshow(!show)
    }
    const [show2, seshow2] = useState(false)
    const handeShowSecand = () => {
        seshow2(!show2)
    }
    return (
        <Flex width={"40%"} flexDirection={"column"}>
            <DropdownList show={show} name={"Section A"} handeShow={handeShow} />
            {show ?
                ListData.map(item => (
                    <Box width={"90%"}
                    border={"none"}
                        key={item.name}>
                        {item.name}
                    </Box>
                ))
                : ""}
            <DropdownList show={show2} name={"Section B"} handeShow={handeShowSecand} />
            {show2 ?
                ListData.map(item => (
                    <Box
                        margin={"1rem auto 1rem auto"}
                        border={"none"}
                        key={item.name}>
                        {item.name}
                    </Box>
                ))
                : ""}
            <DropdownList show={show2} name={"Section C"} handeShow={handeShowSecand} />
        </Flex>
    )
}

export default Manual
