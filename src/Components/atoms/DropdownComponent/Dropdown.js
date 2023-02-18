import React from 'react'
import close from '../../../assets/close.png'
import open from '../../../assets/open.png'
import { Flex } from '../../../Style/layout'
import CustomNavLinks from '../CustomNavLink/CustomNavLinks'

function Dropdown({ show, options, text, handelShow, url }) {
    return (
        <>
            <Flex justifyContent={"space-between"}>
                <CustomNavLinks name={text} url={`/${url}`} />

                {show ? <img src={open} alt="open" onClick={handelShow} />
                    :
                    <img src={close} alt="close" onClick={handelShow} />
                }
            </Flex>
            {show ?
                <Flex
                    alignItems={"left"}
                    justifyContent={"left"}
                    flexDirection={"column"}>
                    {options.map((item) => (
                   <CustomNavLinks name={item.name} url={item.link} />
                    ))}
                </Flex>
                : ""}
        </>
    )
}

export default Dropdown
