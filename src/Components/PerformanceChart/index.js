// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import chart modules //
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
  } from "recharts";
// import preject component //
import './styles.css'

// main component //
class PerfChart extends React.Component{
    render() {
        return (
            <div className="perfChart-box">
                <ResponsiveContainer height={263}>
                    <RadarChart
                        outerRadius={100}
                        data={this.props.perfDatas.data}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" axisLine={false} />
                        <Radar
                            name="Mike"
                            dataKey="kind"
                            fill="#FF0101B2"
                            fillOpacity={0.7}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

PerfChart.propTypes = {
    perfDatas: PropTypes.object.isRequired,
}

export default PerfChart
