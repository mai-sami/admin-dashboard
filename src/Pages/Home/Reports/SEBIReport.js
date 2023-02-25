import React from 'react'
import LineButton from '../../../Components/atoms/LineButton/LineButton'
import List from '../../../Components/organisms/TableComponent/List'
import Manual from '../../../Components/organisms/UploadFile/Manual'
import { Flex } from '../../../Style/layout'

function SEBIReport() {
    return (
        <>
            <LineButton
                name={"Back"}
                urls={"/report"} />
            <Flex width={"97%"} margin={"3rem 0 0 0"} alignItems={"flex-start"} justifyContent={"space-between"}>
                <Manual />
                <List />
            </Flex>
        </>

    )
}

export default SEBIReport
