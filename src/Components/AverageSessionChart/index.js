// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
//import chart modules //
import {
    AreaChart,
    Area,
    XAxis,
    Tooltip,
    Legend,
} from "recharts";
// import preject component //
import './styles.css'
import TickAverage from './Tick';
import AverageTooltip from './Toltip';
import { ResponsiveContainer } from 'recharts/lib/component/ResponsiveContainer';
import AverageLegend from './Legend';

// main component //
class AverageSessionChart extends React.Component{
    render() {
        return (
            <ResponsiveContainer height={263}> 
                <AreaChart 
                        data={this.props.averageDatas}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                    <XAxis 
                        dataKey="day"
                        tick={<TickAverage />}
                        height={1}
                        fill="black"
                        interval="preserveStartEnd"
                        mirror={true}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip content={<AverageTooltip/>}/>
                    <Legend content={<AverageLegend />} verticalAlign="top" />
                    <Area 
                        type="monotone" 
                        dataKey="sessionLength" 
                        strokeWidth={5}
                        stroke="black"
                        dot={false}
                    />
                </AreaChart>
            </ResponsiveContainer >
        )
    }
}

AverageSessionChart.propTypes = {
    averageDatas: PropTypes.any.isRequired,
}

export default AverageSessionChart
