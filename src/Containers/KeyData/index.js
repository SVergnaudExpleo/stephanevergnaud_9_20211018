// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'
import KeyCard from '../../Components/KeyCard'
import calorieLogo from '../../Assets/calories.svg'

// main component //
class KeyData extends React.Component{
    constructor(props){
        super(props)
        this.state ={}        
    }
    render() {
        return (
            <div>
                <KeyCard data={this.props.keyDatas.calorieCount} text={"Calories"} unit={"kCal"} logo={calorieLogo} />
            </div>
        )
    }
}



KeyData.propTypes = {
    keyDatas: PropTypes.object.isRequired,
}

export default KeyData
