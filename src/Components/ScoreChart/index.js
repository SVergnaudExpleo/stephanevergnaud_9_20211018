/**
 * This react component show the user daily performance in a cicle chart
 * 
 * @param {array} scoreDatas React component props give chart data
 * @author Stéphane
 * @version 0.1
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import './styles.css';
import ScoreLegend from './Legend';

class ScoreChart extends React.Component{
    render() {
        return (
            <div className="score-box">
                <ResponsiveContainer>
                    <RadialBarChart
                        width={258} height={263}
                        data={this.props.scoreDatas}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0}}
                        innerRadius="70%" 
                        outerRadius="80%"
                        startAngle={90} 
                        endAngle={220}
                    >
                        <RadialBar 
                            dataKey='score'
                            clockwise={false}
                            fill="red"
                        />
                        <Legend 
                            content={<ScoreLegend />} 
                            height={"0"}
                            verticalAlign="top"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        );
    };
};

ScoreChart.propTypes = {
    scoreDatas: PropTypes.array.isRequired,
};

export default ScoreChart;