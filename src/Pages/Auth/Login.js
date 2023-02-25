import React from 'react'
import { ToastContainer } from 'react-toastify';
import UseAuth from '../../Hooks/UseAuth';
import Spinner from '../../Components/molecules/Spinners/Spinner';
import Anckors from '../../Components/atoms/AnckorComponent/Anckors';
import CustomInputForms from '../../Components/organisms/CustomInputForms/CustomInputForms';
import { LoginDataFeild } from '../../Mock/mock';

function Login() {
    const { loginAction, isLoading } = UseAuth()
    return (
        <>
            <ToastContainer />
            {isLoading ? <Spinner /> :
                <CustomInputForms
                    width={"100%"}
                    TitleName={"LOG IN"}
                    nameButton={"LOG IN"}
                    actionApi={loginAction}
                    AnckorText={<Anckors
                        text={"Don’t have an account ?"}
                        name={"Sign up"}
                        color={"#FF0000"}
                        href={"/register"} />}
                    DataFeild={LoginDataFeild}>
                    <Anckors
                        justifyContent={"right"}
                        name={"Forgotpassword ?"}
                        color={"#000000"}
                        href={"/forgetPassword"} />
                </CustomInputForms>
            }
        </>
    )
}

export default Login
