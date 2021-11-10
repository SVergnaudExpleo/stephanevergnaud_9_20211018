import React from 'react';
import PropTypes from 'prop-types';
import {
    AreaChart,
    Area,
    XAxis,
    Tooltip,
    Legend,
} from "recharts";
import { ResponsiveContainer } from 'recharts/lib/component/ResponsiveContainer';
import './styles.css';
import TickAverage from './Tick';
import AverageTooltip from './Tooltip';
import AverageLegend from './Legend';

/**
 * Show user average session length in an area chart
 * 
 * @component
 * @class
 * @param {any} averageDatas React component props containing chart datas
 * @author Stéphane
 * @version 1
 */

class AverageSessionChart extends React.Component{
    render() {
        return (
            <div className="average-box">
                <ResponsiveContainer height={263}> 
                    <AreaChart 
                            data={this.props.averageDatas}
                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                        <XAxis 
                            dataKey="day"
                            tick={<TickAverage />}
                            height={1}
                            fill="white"
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
                            strokeWidth={3}
                            stroke="white"
                            dot={false}
                            fill="red"
                        />
                    </AreaChart>
                </ResponsiveContainer >
            </div>
        );
    };
};

AverageSessionChart.propTypes = {
    averageDatas: PropTypes.any.isRequired,
};

export default AverageSessionChart;
