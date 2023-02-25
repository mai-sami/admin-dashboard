import React from 'react'
import Chart from '../../../Components/organisms/Charts/Chart'
import { AnalyticsCharts} from '../../../Mock/mock'

function Analytics() {
    return (
        <Chart DataCharts={AnalyticsCharts} />

    )
}

export default Analytics
