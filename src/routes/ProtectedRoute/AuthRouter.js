import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthRouter() {
    const TokenAuth = localStorage.getItem('token')
    if (TokenAuth) return <Navigate to={'/'} />
    return (
        <>
        <Outlet /> 
        </>
    )
}

export default AuthRouter
