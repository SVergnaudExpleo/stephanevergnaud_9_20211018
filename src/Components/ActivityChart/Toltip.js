// import react modules //
import React from 'react';
// import preject component //
import './styles.css';

// main component //
class ActivityTooltip extends React.Component{
    render() {
        if (this.props.payload === null) {
             return (
                null
            );
        } else if(this.props.payload.length > 0 && this.props.payload !== undefined && this.props.active === true){
            return (
                <div className="tooltip-box">
                    <div>{this.props.payload[0].payload.kilogram}kg</div>
                    <div>{this.props.payload[0].payload.calories}Kcal</div>
                </div>
            );
        } else {
            return (
                null
            );
        }
    };
};

export default ActivityTooltip;