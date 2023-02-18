import React from 'react'
import { NavLinkS } from './style'

function CustomNavLinks({ name, url }) {
    return (
        <NavLinkS activeClassName={"active"} to={url}>
            {name}
        </NavLinkS>
    )
}

export default CustomNavLinks
