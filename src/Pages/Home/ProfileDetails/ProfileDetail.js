import React from 'react'
import LineButton from '../../../Components/atoms/LineButton/LineButton';
import CustomInputForms from '../../../Components/organisms/CustomInputForms/CustomInputForms';
import { DataCreatFeildProfile } from '../../../Mock/mock';
import { Hr } from '../../../Style/elments';

function ProfileDetail() {
    return (
        <>
            <LineButton name={"View details"}
                urls={'/'}>
                    <Hr></Hr>
                </LineButton>
            <CustomInputForms
                margin={"3rem auto auto auto"}
                padding={"0rem"}
                width={"33%"}
                LineHeight={"3"}
                display={"flex"}
                border={"none"}
                background={"transparent"}
                widthForm={"80%"}
                shadow={"none"}
                nameButton={"Submit"}
                DataFeild={DataCreatFeildProfile}
             />
        </>
    )
}

export default ProfileDetail
