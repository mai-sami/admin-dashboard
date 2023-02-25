import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/molecules/Header";
import Sidebar from "../Components/molecules/Sidebar";
import Spinner from "../Components/molecules/Spinners/Spinner";
import { Flex } from "../Style/layout";

export function BaseLayout({ children }) {
    const TokenAuth = localStorage.getItem('token')
    if (!TokenAuth) return <Navigate to={'/login'} />
    return (
        <Flex alignItems="start" justifyContent={"flex-start"}>
            <Sidebar />
            <Flex width={"100%"} flexDirection={"column"}>
                <Header />
                <Suspense fallback={<Spinner />}>
                <Outlet />
                </Suspense>
            </Flex>
        </Flex>
    )
}