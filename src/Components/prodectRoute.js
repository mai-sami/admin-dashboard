import React, { Children, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Dashboard from '../Pages/Home/Dashboard'
import AuthRouter from '../routes/ProtectedRoute/AuthRouter'
import UserRouter from '../routes/ProtectedRoute/UserRouter'
function ProdectRoute({ children }) {
    const TokenAuth = localStorage.getItem('token')


    if (!TokenAuth) {
        Redirect("/login")
    }

    return children



}

export default ProdectRoute
