/**
 * This React component group 3 small charts for better layout customization
 * 
 * @param This React component need averageDatas props as array
 * @param This React component need perfDatas props as object
 * @param This React component need scoreDatas props as array
 * @author Stéphane
 * @version 0.1
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
