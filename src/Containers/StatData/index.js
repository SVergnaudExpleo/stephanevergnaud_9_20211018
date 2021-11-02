// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'
import AverageSessionChart from '../../Components/AverageSessionChart'
import PerfChart from '../../Components/PerformanceChart'
import ScoreChart from '../../Components/ScoreChart'

// main component //
class StatData extends React.Component{
    render() {
        return (
            <div className="statData-box">
                <AverageSessionChart averageDatas={this.props.averageDatas} />
                <PerfChart perfDatas={this.props.perfDatas} />
                <ScoreChart scoreDatas={this.props.scoreDatas} />
            </div>
        )
    }
}

StatData.propTypes = {
    averageDatas: PropTypes.array.isRequired,
    perfDatas: PropTypes.object.isRequired,
    scoreDatas: PropTypes.array.isRequired,
}

export default StatData
