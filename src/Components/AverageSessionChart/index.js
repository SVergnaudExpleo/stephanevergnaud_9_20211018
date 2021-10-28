// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
//import chart modules //
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";
// import preject component //
import './styles.css'
import TickAverage from './Tick';
import AverageTooltip from './Toltip';

// main component //
class AverageSessionChart extends React.Component{
    render() {
        return (
            <div className='areachart-box'>
                <div className="color"></div>
                <AreaChart
                    width={258}
                    height={263}
                    data={this.props.averageDatas}
                    margin={{top: 0,right: 0,left: 0,bottom:0}}
                    
                >
                    <XAxis 
                        dataKey="day"
                        tick={<TickAverage />}
                        height={0.1}
                        fill="black"      
                    />
                    <YAxis 
                        dataKey="sessionLength"
                        allowDataOverflow={true}
                    />
                    <Tooltip content={<AverageTooltip/>}/>
                    <Area
                        strokeWidth={5}
                        stroke="black"
                        type="monotone"
                        dataKey="sessionLength"
                        fill="#FF0c0c"
                        stackId="1"
                    />
{/*                     <Area 
                        type="monotone"
                        dataKey="sessionLength"
                        stackId="1"
                        fill="#FF0000"
                    /> */}
                    
                </AreaChart>
                
            </div>
        )
    }
}

AverageSessionChart.propTypes = {
    averageDatas: PropTypes.any.isRequired,
}

export default AverageSessionChart
