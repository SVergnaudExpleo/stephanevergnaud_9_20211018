// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import chart modules //
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";
// import preject component //
import './styles.css'

// main component //
class PerfChart extends React.Component{
    render() {
        return (
            <RadarChart
                cx={129}
                cy={132}
                outerRadius={150}
                width={258}
                height={263}
                data={this.props.perfDatas.data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="kind"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
            </RadarChart>
        )
    }
}

PerfChart.propTypes = {
    perfDatas: PropTypes.object.isRequired,
}

export default PerfChart
