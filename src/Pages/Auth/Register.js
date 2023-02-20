import React from 'react'
import { ToastContainer } from 'react-toastify';
import Anckors from '../../Components/atoms/AnckorComponent/Anckors';
import Spinner from '../../Components/molecules/Spinners/Spinner';
import UseAuth from '../../Hooks/UseAuth';
import CustomInputForms from '../../Components/organisms/CustomInputForms/CustomInputForms';
import { RegisterDataFeild } from '../../Mock/mock';
function Register() {
    const { RegisterAction, isLoading } = UseAuth()
    return (
        <>
            <ToastContainer />
            {isLoading ? <Spinner /> :
                <CustomInputForms
                    width={"100%"}
                    TitleName={"SIGN UP"}
                    nameButton={"SIGN UP"}
                    actionApi={RegisterAction}
                    AnckorText={<Anckors
                        text={"Already have an account ?"}
                        name={"Login"}
                        color={"#FF0000"}
                        href={"/login"} />}
                    DataFeild={RegisterDataFeild}>
                </CustomInputForms>
            }
        </>
    )
}

export default Register
