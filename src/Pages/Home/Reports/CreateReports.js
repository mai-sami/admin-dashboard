import React from 'react'
import LineButton from '../../../Components/atoms/LineButton/LineButton'
import CustomInputForms from '../../../Components/organisms/CustomInputForms/CustomInputForms'
import { ReportsDataFeilds } from '../../../Mock/mock'
 
function CreateReports() {
    return (
        <>

            <CustomInputForms
                margin={"3rem auto auto auto"}
                padding={"0rem"}
                width={"33%"}
                LineHeight={"3"}
                DataFeild={ReportsDataFeilds} 
                url={"/report"}/>
        </>
    )
}

export default CreateReports
