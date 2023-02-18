import React, { useState } from 'react'
import { DataSidebar, ListAnalytics, ListReports, options } from '../../../Mock/mock'
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
    return (
        <Sidebar>
            <Button
                name={"LOGO HERE"}
                margin={"1rem 1rem 4rem 1rem"}
                color={"000000"}
                padding={"1.3"}
                background={"#D9D9D9"}
                height={"60px"}
            />
            {DataSidebar.map(item => (
                <CustomNavLinks name={item.name} url={`${item.link}`} />
            ))}
            <Dropdown text={"Report"} url={"report"} show={showReport} handelShow={handelShowReports} options={ListReports} />
            <Dropdown text={"Analytics"} url={"/Analytics"} show={show} handelShow={handelShow} options={ListAnalytics} />

        </Sidebar>
    )
}

export default Index
