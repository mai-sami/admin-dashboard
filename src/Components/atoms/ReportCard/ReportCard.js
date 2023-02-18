import React from 'react'
import { Flex } from '../../../Style/layout'
import CustomNavLinks from '../CustomNavLink/CustomNavLinks'
import { ReportCards, SmallCard } from './style'

function ReportCard({ data }) {
    return (
        <Flex justifyContent={"start"} width={"100%"} flexWrap={"wrap"}>
            {data?.map(item => (
                <ReportCards>
                    <SmallCard>
                    </SmallCard>
                        <CustomNavLinks name={item.name} url={item.link} />
                </ReportCards>
            ))}

        </Flex>
    )
}

export default ReportCard
