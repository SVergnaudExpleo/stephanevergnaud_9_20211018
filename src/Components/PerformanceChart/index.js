import React from 'react';
import PropTypes from 'prop-types';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
  } from "recharts";
import './styles.css';

/**
 * This React component show the user performance in a radar chart
 * 
 * @component
 * @class
 * @param {object} perfDatas React component props set datas of perf chart
 * @author Stéphane
 * @version 1
 */

class PerfChart extends React.Component{
    render() {
        let kindObject = this.props.perfDatas.kind;
        let dataArray = this.props.perfDatas.data;
        let arrayDatas = [];
        
        if (dataArray!==undefined && kindObject!==undefined) {
            this.props.perfDatas.data.forEach(el => {
                let newData = {
                    value: el.value,
                    kind: kindObject[el.kind]
                }
                arrayDatas.push(newData)
            });
        };

        return (
            <div className="perfChart-box">
                <ResponsiveContainer height={263}>
                    <RadarChart
                        data={arrayDatas}
                        fill="white"
                    >
                        <PolarGrid />
                        <PolarAngleAxis 
                            dataKey="kind" 
                            axisLine={false} 
                        />
                        <Radar
                            dataKey="value"
                            fill="#FF0101B2"
                            fillOpacity={0.7}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    };
};

PerfChart.propTypes = {
    perfDatas: PropTypes.object.isRequired,
};

export default PerfChart;