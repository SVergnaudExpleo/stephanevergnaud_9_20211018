// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
// import preject component //
import './styles.css'

// main component //
class Name extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <div className='name-box'>
                <div className='bonjour'>
                    Bonjour
                </div>
                <div className='name'>
                    {this.props.datas.filter()}
                </div>
            </div>
        )
    }
}

Name.propTypes = {
    datas: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
}

export default Name
