// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import preject component //
import './styles.css'

// main component //
class Card extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
        this.style = {
            backgroundSize:'cover',
            backgroundPosition: 'center'
        }
    }

    render() {
        return (
            <Link className='card' style={this.style} to={'/detail/'+this.props.buildingData.id} >
                <div className='card-title'>
                    {this.props.locationTitle}
                </div>
            </Link>
        )
    }
}

Card.propTypes = {
    locationTitle: PropTypes.string.isRequired,
    imgBg: PropTypes.string.isRequired,
    buildingData: PropTypes.object.isRequired,
}

export default Card
