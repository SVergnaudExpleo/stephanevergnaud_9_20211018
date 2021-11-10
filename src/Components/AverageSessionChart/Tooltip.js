import React from 'react';
import './styles.css';

/**
 * Tooltip activated on maouse over for average session chart
 * 
 * @component
 * @class
 */

class AverageTooltip extends React.Component{
    render() {
        if(this.props.payload.length > 0 && this.props.payload !== undefined && this.props.payload !== null && this.props.active === true){
            return (
                <div className="tipAverage-box">
                    <div>{this.props.payload[0].payload.sessionLength} min</div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    };
};

export default AverageTooltip;