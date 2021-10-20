// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'
import Name from '../../Components/Name'

// main component //
class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <div className='dashboard-box'>
                <div className='name-container'>
                    <Name />
                </div>
                <div className='barGraph-container'>
                    bar
                </div>
                <div className='stat-container'>
                    stat
                </div>
                <div className='calories-container'>
                    calories
                </div>

            </div>
        )
    }
}

Dashboard.propTypes = {

}

export default Dashboard
