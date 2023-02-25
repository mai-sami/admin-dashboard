import React, { useState } from 'react'
import Tab from '../../../Components/atoms/Tabs/Tab'
import Manual from '../../../Components/organisms/UploadFile/Manual'
import { Flex } from '../../../Style/layout'
import ReportInputField from '../../../Components/organisms/UploadFile/ReportInputField'
import BulkUpload from '../../../Components/organisms/UploadFile/BulkUpload'

function UploadFiles() {
    const [show, setShow] = useState(true)
    const [upload, setUpload] = useState(false)

    const handelShow = () => {
        setShow(true)
        setUpload(false);
    }
    const toggleTab = () => {
        setShow(false)
        setUpload(true);
    };

    return (

        <Flex width={"95%"} flexDirection={"column"} alignItems={"flex-start"}>
            <Tab upload={upload} show={show} handelShow={handelShow} toggleTab={toggleTab} />
            <Flex width={"100%"} margin={"1rem 0 0 0"} alignItems={"flex-start"}  justifyContent={"space-between"}>
                {show ?
                    <>
                        <Manual />
                        <ReportInputField />
                    </>
                    :
                    upload ?
                        <BulkUpload />
                        : ""}
            </Flex>
        </Flex>

    )
}

export default UploadFiles
