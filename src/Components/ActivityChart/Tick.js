// import react modules //
import React from 'react'
// import preject component //
import './styles.css'

// main component //
class TickActivity extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        const { x, y, payload } = this.props;
        let test = payload.value + 1
        return (
            <g transform={`translate(${x},${y})`}>
                <text 
                    x={-5} y={0} dy={0} 
                    fill="#9B9EAC"
                >
                    {test}
                </text>
            </g>
        );
    }
}

export default TickActivity