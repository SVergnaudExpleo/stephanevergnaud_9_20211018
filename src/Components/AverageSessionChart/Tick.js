// import react modules //
import React from 'react'
// import preject component //
import './styles.css'

// main component //
class TickAverage extends React.Component{
    render() {
        const day = ["L","M","M","J","V","S","D"]
        const { x, y, payload } = this.props;
        let val = payload.value -1
        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0} y={0} dy={0} dx={-5}
                >
                    {day[val]}
                </text>
            </g>
        );
    }
}

export default TickAverage