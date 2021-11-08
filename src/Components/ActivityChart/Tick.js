// import react modules //
import React from 'react';
// import preject component //
import './styles.css';

// main component //
class TickActivity extends React.Component{
    render() {
        const { x, y, payload } = this.props;
        let pVal = payload.value + 1;
        return (
            <g transform={`translate(${x},${y})`}>
                <text 
                    x={-5} y={0} dy={20} 
                    fill="#9B9EAC"
                >
                    {pVal}
                </text>
            </g>
        );
    }
}

export default TickActivity