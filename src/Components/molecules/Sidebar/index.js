import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataSidebar, ListAnalytics, ListReportSidebar } from '../../../Mock/mock'
import Button from '../../atoms/Buttons/Button'
import CustomNavLinks from '../../atoms/CustomNavLink/CustomNavLinks'
import Dropdown from '../../atoms/DropdownComponent/Dropdown'
import { Sidebar } from './style'

function Index() {
    const [show, setShow] = useState(false)
    const handelShow = () => {
        setShow(!show)
    }
    const [showReport, setShowReport] = useState(false)
    const handelShowReports = () => {
        setShowReport(!showReport)
    }
    const LogOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }
    return (
        <Sidebar>
            <Link to={"/login"}>
            <Button
                name={"Logout"}
                margin={"1rem 1rem 4rem 1rem"}
                color={"000000"}
                padding={"1.3"}
                background={"#D9D9D9"}
                height={"60px"}
                onClick={LogOut}
                />
                </Link>
            {DataSidebar.map(item => (
                <CustomNavLinks name={item.name} url={`${item.link}`} />
            ))}
            <Dropdown text={"Report"} url={"/report"} show={showReport} handelShow={handelShowReports} options={ListReportSidebar} />
            <Dropdown text={"Analytics"} url={"/analytics"} show={show} handelShow={handelShow} options={ListAnalytics} />

        </Sidebar>
    )
}

export default Index
