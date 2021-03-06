import React from 'react';
import './styles.css';

/**
 * Activity chart legend component
 * 
 * @component
 * @class
 */

class ActivityLegend extends React.Component{
    render() {
        return (
            <div className="actiLegend-box">
                <div className="legend-title">Activité quotidienne</div>
                
                <div className="masse-box">
                    <div className="circle circle-black"></div>
                    <div className="masse">Poids (kg)</div>
                </div>

                <div className="calo-box">
                    <div className="circle circle-red"></div>
                    <div className="calo">Calories brulées (kCal)</div>
                </div>
            </div>
        );
    };
};

export default ActivityLegend;