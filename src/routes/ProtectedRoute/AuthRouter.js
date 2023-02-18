import { Redirect, Route } from "react-router";
import { lazy } from "react";
 
const Login = lazy(() => import("../../Pages/Auth/Login"));
const Register = lazy(() => import("../../Pages/Auth/Register"));
const ForgetPassword = lazy(() => import("../../Pages/Auth/ForgetPassword"));
const Verification = lazy(() => import("../../Pages/Auth/Verification"));

function AuthRouter() {
    const TokenAuth = localStorage.getItem('token')
    console.log(TokenAuth)
       if(TokenAuth)  return <Redirect to={'/'} />       
       return (
        <>
                <Route
                    path={"/login"}
                    key={"1"}
                    component={() => {
                        return <Login />;
                    }}
                />,
                <Route
                    path={"/register"}
                    key={"2"}
                    component={() => {
                        return <Register />;
                    }}
                />,
                <Route
                    path={"/forgetPassword"}
                    key={"3"}
                    component={() => {
                        return <ForgetPassword />;
                    }}
                />,
                <Route
                    path={"/verification"}
                    key={"4"}
                    component={() => {
                        return <Verification />;
                    }}
                />
            </>
       )

 
}


export default AuthRouter;
