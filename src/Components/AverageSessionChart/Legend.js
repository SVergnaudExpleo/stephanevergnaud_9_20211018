import React from 'react';
import './styles.css';

/**
 * Legent of average session chart
 * 
 * @component
 * @class
 */
class AverageLegend extends React.Component{
    render() {
        return (
            <div className="averLegend-box">
                Durée moyenne des sessions
            </div>
        );
    };
};

export default AverageLegend;