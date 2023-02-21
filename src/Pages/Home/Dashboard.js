import React from 'react'
import Chart from '../../Components/organisms/Charts/Chart'
import { DashboardCharts } from '../../Mock/mock'

function Dashboard() {
    return (
        <>
      <Chart DataCharts={DashboardCharts} />
        </>
    )
}

export default Dashboard
