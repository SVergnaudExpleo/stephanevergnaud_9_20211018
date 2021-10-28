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
    Legend,
} from "recharts";
// import preject component //
import './styles.css'
import ActivityLegend from './Legend';
import ActivityTooltip from './Toltip';
import TickActivity from './Tick';

// main component //
class ActivityChart extends React.Component{
    render() {
        return (
            <BarChart
                width={835}
                height={320}
                data={this.props.datas}
                margin={{ top: 0, right: 0, left: 0, bottom: 0}}
            >
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <Legend content={<ActivityLegend />} verticalAlign="top" />
                <Tooltip content={<ActivityTooltip />} />
                <XAxis  
                    axisLine={false}
                    tick={<TickActivity/>}
                />
                <YAxis 
                    dataKey="kilogram" 
                    yAxisId={1} 
                    orientation="right" 
                    axisLine={false} 
                />
                <YAxis 
                    dataKey="calories" 
                    yAxisId={2} 
                    hide={true} 
                />
                
                <Bar 
                    dataKey="kilogram"
                    fill="#282D30"
                    barSize={7} 
                    yAxisId={1}
                    radius={[3,3,0,0]}
                />
                <Bar 
                    dataKey="calories"
                    fill="#E60000"
                    barSize={7}
                    yAxisId={2}
                    radius={[3,3,0,0]}
                />
            </BarChart>

        )
    }
}

ActivityChart.propTypes = {
    datas: PropTypes.array.isRequired,
}

export default ActivityChart
