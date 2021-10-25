// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import chart modules //
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
// import preject component //
import './styles.css'

// main component //
class ActivityChart extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <div>
                <BarChart
                    width={835}
                    height={320}
                    data={this.props.datas}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram" fill="#282D30"/>
                    <Bar dataKey="calories" fill="#E60000" />
                </BarChart>
            </div>
        )
    }
}

ActivityChart.propTypes = {
    datas: PropTypes.object.isRequired,
}

export default ActivityChart
