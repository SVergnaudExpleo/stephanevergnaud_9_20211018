// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
//import chart modules //
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    LineChart,
    Line,
} from "recharts";
// import preject component //



// main component //
class TestChart extends React.Component{
    render() {
        return (
            <div className='areachart-box'>
                <AreaChart
                    width={258}
                    height={263}
                    data={this.props.averageDatas}
                    margin={{top: 0,right: 0,left: 0,bottom:0}}
                >
                    <Area 
                        type="monotone" 
                        dataKey="sessionLength" 
                        stackId="1" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                    />
                    <Area 
                        type="monotone" 
                        dataKey={"sessionLength"} 
                        stackId="1"
                        stroke="#82ca9d" 
                        fill="#82ca9d"
                    />
                </AreaChart>
            </div>
        )
    }
}

TestChart.propTypes = {
    averageDatas: PropTypes.any.isRequired,
}

export default TestChart
