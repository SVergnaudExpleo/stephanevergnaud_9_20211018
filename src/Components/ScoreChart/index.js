// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
import {
    RadialBarChart,
    RadialBar,
    Legend,
} from 'recharts';
// import preject component //
import './styles.css'
import ScoreLegend from './Legend';

// main component //
class ScoreChart extends React.Component{
    render() {
        return (
            <div className="score-box">            
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
            </div>
        )
    }
}

ScoreChart.propTypes = {
    scoreDatas: PropTypes.array.isRequired,
}

export default ScoreChart