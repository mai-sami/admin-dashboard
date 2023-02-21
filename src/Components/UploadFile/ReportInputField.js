import React from 'react'
import { ReportsDataFeildManual } from '../../../Mock/mock'
import CustomInputForms from '../CustomInputForms/CustomInputForms'

function ReportInputField() {
    return (
        <>
            <CustomInputForms
                margin={"0rem auto auto auto"}
                padding={"1rem"}
                width={"50%"}
                display={"flex"}
                border={"none"}
                background={"transparent"}
                widthForm={"80%"}
                shadow={"none"}
                LineHeight={"2.5"}
                nameButton={"Submit"}
                DataFeild={ReportsDataFeildManual} />
        </>

    )
}

export default ReportInputField
