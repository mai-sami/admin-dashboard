import React from 'react'
import { ReportsDataFeild } from '../../../Mock/mock'
import CustomInputForms from '../CustomInputForms/CustomInputForms'
 
function ReportInputField() {
    return (
        <>
            <CustomInputForms
                margin={"0rem auto auto auto"}
                padding={"1rem"}
                width={"50%"}
                DataFeild={ReportsDataFeild} />
        </>

    )
}

export default ReportInputField
