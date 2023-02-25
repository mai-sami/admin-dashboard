import React from 'react'
import { ListDatas } from '../../../Mock/mock'
import { P } from '../../../Style/elments'
import { Flex, ListTables } from '../../../Style/layout'

function List() {
    return (
        <>
            <ListTables>
                {ListDatas.map((item, index) => (
                    <Flex border={"1px solid #D0D0D0"}>
                        <P width={"10%"}  >{index + 1}</P>
                        <P width={"90%"} border={"1px solid #D0D0D0"}>{item}</P>
                    </Flex>
                ))}

            </ListTables>

        </>
    )
}

export default List
