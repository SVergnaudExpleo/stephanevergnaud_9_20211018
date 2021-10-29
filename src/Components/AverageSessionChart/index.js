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
import './styles.css'
import TickAverage from './Tick';
import AverageTooltip from './Toltip';

// main component //
class AverageSessionChart extends React.Component{
    render() {
        return (
            <div className='areachart-box'>
                <div className="color"></div>
                <div className="lineDraw-box">
                    <LineChart 
                            width={258} height={263} 
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
                        <Line 
                            type="monotone" 
                            dataKey="sessionLength" 
                            strokeWidth={5}
                            stroke="black"
                            dot={false}
                        />
                    </LineChart>
                </div>
                <div className="areaDraw-box">
                    <AreaChart
                        width={258}
                        height={263}
                        data={this.props.averageDatas}
                        margin={{top: 0,right: 0,left: 0,bottom:0}}
                    >
                        <defs>
                            <linearGradient 
                                id='colorUv' 
                                x1='6' y1='0' x2='7' y2='0' 
                                spreadMethod='reflect'
                            >
                                <stop offset='0' stopColor='blue' />
                                <stop offset='1' stopColor={"violet"} />
                            </linearGradient>
                        </defs>
                        <Area
                            stackId="1"
                            stroke=""
                            type="monotone"
                            dataKey="sessionLength"
                            fill="#ff0811"

                        />
{/*                        <Area 
                            stackId="1"
                            type="sessionLength"
                            dataKey="day"
                            fill="#FF0000"
                            
                        /> */}
                    </AreaChart>
                </div>
            </div>
        )
    }
}

AverageSessionChart.propTypes = {
    averageDatas: PropTypes.any.isRequired,
}

export default AverageSessionChart
