/**
 * Show average activity of user in a bar chart
 * 
 * @param {array} Datas React component props
 * @author Stéphane
 * @version 1
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import './styles.css'
import ActivityLegend from './Legend';
import ActivityTooltip from './Tooltip';
import TickActivity from './Tick';

class ActivityChart extends React.Component{
    render() {
        return (
            <ResponsiveContainer height={320}>
                <BarChart
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
            </ResponsiveContainer>
        );
    };
};

ActivityChart.propTypes = {
    datas: PropTypes.array.isRequired,
};

export default ActivityChart;