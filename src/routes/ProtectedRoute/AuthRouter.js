import { Redirect, Route } from "react-router";
import { lazy } from "react";

const Login = lazy(() => import("../../Pages/Auth/Login"));
const Register = lazy(() => import("../../Pages/Auth/Register"));
const ForgetPassword = lazy(() => import("../../Pages/Auth/ForgetPassword"));
const Verification = lazy(() => import("../../Pages/Auth/Verification"));

function AuthRouter() {
    const TokenAuth = localStorage.getItem('token')
    console.log(TokenAuth)
    if (TokenAuth) return <Redirect to={'/'} />
    return (
        <>
            <Route
                path={"/login"}
                component={() => {
                    return <Login />;
                }}
            />,
            <Route
                path={"/register"}
                component={() => {
                    return <Register />;
                }}
            />,
            <Route
                path={"/forgetPassword"}
                component={() => {
                    return <ForgetPassword />;
                }}
            />,
            <Route
                path={"/verification"}
                component={() => {
                    return <Verification />;
                }}
            />
        </>
    )


}


export default AuthRouter;
