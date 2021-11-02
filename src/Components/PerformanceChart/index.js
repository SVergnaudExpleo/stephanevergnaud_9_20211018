// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import chart modules //
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
  } from "recharts";
// import preject component //
import './styles.css'

// main component //
class PerfChart extends React.Component{
    render() {
        return (
            <div className="perfChart-box">
                <RadarChart
                    outerRadius={100}
                    width={258}
                    height={263}
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
            </div>
        )
    }
}

PerfChart.propTypes = {
    perfDatas: PropTypes.object.isRequired,
}

export default PerfChart
