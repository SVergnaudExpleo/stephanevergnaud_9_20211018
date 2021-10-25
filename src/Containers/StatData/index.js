// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'

// main component //
class StatData extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <div className="statData-box">
                
            </div>
        )
    }
}

StatData.propTypes = {
    averageDatas: PropTypes.object.isRequired,
    perfDatas: PropTypes.object.isRequired,
    scoreDatas: PropTypes.object.isRequired,
}

export default StatData
