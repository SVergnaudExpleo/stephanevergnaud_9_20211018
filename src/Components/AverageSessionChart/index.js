// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
//import chart modules //
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
// import preject component //
import './styles.css'

// main component //
class AverageSessionChart extends React.Component{
    render() {
        return (
            <AreaChart
                width={258}
                height={263}
                data={this.props.averageDatas}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis dataKey="sessionLength"/>
                <Tooltip />
                <Area type="monotone" dataKey="sessionLength" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        )
    }
}

AverageSessionChart.propTypes = {
    averageDatas: PropTypes.any.isRequired,
}

export default AverageSessionChart
