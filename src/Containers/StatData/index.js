/**
 * This React component group 3 small charts for better layout customization
 * 
 * @param {array} averageDatas React component props datas for average session chart
 * @param {object} perfDatas React component props datas for performance chart
 * @param {array} scoreDatas React component props datas for scorechart
 * @author Stéphane
 * @version 1
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import AverageSessionChart from '../../Components/AverageSessionChart';
import PerfChart from '../../Components/PerformanceChart';
import ScoreChart from '../../Components/ScoreChart';

class StatData extends React.Component{
    render() {
        return (
            <div className="statData-box">
                <AverageSessionChart averageDatas={this.props.averageDatas} />
                <PerfChart perfDatas={this.props.perfDatas} />
                <ScoreChart scoreDatas={this.props.scoreDatas} />
            </div>
        );
    };
};

StatData.propTypes = {
    averageDatas: PropTypes.array.isRequired,
    perfDatas: PropTypes.object.isRequired,
    scoreDatas: PropTypes.array.isRequired,
};

export default StatData;
