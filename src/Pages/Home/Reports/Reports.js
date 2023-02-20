import React from 'react'
import LineButton from '../../../Components/atoms/LineButton/LineButton'
import ReportCard from '../../../Components/atoms/ReportCard/ReportCard'
import { ListReports } from '../../../Mock/mock'
import { Hr } from '../../../Style/elments'

function Reports() {
    return (
        <>
            <LineButton name={"Create report"}
                urls={'/create-report'}>
                <Hr></Hr>
            </LineButton>
            <ReportCard data={ListReports} />
        </>
    )
}

export default Reports
