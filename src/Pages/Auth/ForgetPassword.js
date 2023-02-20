import React from 'react'
import CustomInputForms from '../../Components/organisms/CustomInputForms/CustomInputForms';
import { ForgetPasswordFeild } from '../../Mock/mock';

function ForgetPassword() {
    return (
        <CustomInputForms
            width={"100%"}
            TitleName={"FORGOT PASSWORD"}
            nameButton={"SUBMIT"}
            url={"/verification"}
            DataFeild={ForgetPasswordFeild} />
    )
}

export default ForgetPassword
