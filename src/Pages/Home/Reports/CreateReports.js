import React from 'react'
import LineButton from '../../../Components/atoms/LineButton/LineButton'
import CustomInputForms from '../../../Components/organisms/CustomInputForms/CustomInputForms'
import { CreateReportsDataFeilds} from '../../../Mock/mock'
import { Hr } from '../../../Style/elments'

function CreateReports() {
    return (
        <>
            <LineButton name={"View details"}
                urls={'/report'}>
                <Hr></Hr>
            </LineButton>
            <CustomInputForms
                margin={"3rem auto auto auto"}
                padding={"0rem"}
                width={"33%"}
                border={"none"}
                display={"flex"}
                LineHeight={"3"}
                background={"transparent"}
                widthForm={"80%"}
                shadow={"none"}
                nameButton={"Submit"}
                DataFeild={CreateReportsDataFeilds}
            />
        </>
    )
}

export default CreateReports
