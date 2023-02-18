import React from 'react'
import LineButton from '../../../Components/atoms/LineButton/LineButton';
import { DetailsSchema } from '../../../Pages/Auth/Validation';

import CustomInputForms from '../../../Components/organisms/CustomInputForms/CustomInputForms';
import { DataFeild } from '../../../Mock/mock';

function ProfileDetail() {
    return (
        <>
            <LineButton name={"View details"}
                urls={'/'} />
            <CustomInputForms
                margin={"3rem auto auto auto"}
                padding={"0rem"}
                width={"33%"}
                LineHeight={"3"}
                DataFeild={DataFeild}
                Validation={DetailsSchema}
            />
        </>
    )
}

export default ProfileDetail
