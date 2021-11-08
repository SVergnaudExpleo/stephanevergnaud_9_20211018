/**
 * Tick for average session chart
 */
import React from 'react';
import './styles.css';

class TickAverage extends React.Component{
    render() {
        const day = ["L","M","M","J","V","S","D"];
        const { x, y, payload } = this.props;
        let val = payload.value -1;

        return (
            <g transform={`translate(${x},${y})`} >
                <text
                    x={0} y={0} dy={0} dx={-5}
                    fill="white"
                >
                    {day[val]}
                </text>
            </g>
        );
    };
};

export default TickAverage;