import React from 'react';
import './styles.css';

/**
 * This React component is the legend of score chart
 * 
 * @component
 * @class
 */

class ScoreLegend extends React.Component{
    render() {
        if (this.props.payload === null) {
            return (
               null
           );
       } else if(this.props.payload.length > 0 && this.props.payload !== undefined){
           console.log()
           return (
                <div className="scoreLegend-box">
                    <div className="sco-title">Score</div>
                    <div className="scoVal-box">
                        <div className="sco-val">{this.props.payload[0].payload.value*100}%</div>
                        <div className="sco-text">de votre objectif</div>
                    </div>
                </div>
            );
       } else {
           return (
               null
           );
       }
    };
};

export default ScoreLegend;