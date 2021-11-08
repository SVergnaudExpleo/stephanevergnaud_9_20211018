// import react modules //
import React from 'react';
import PropTypes from 'prop-types';
// import preject component //
import './styles.css';

// main component //
class KeyCard extends React.Component{   
    render() {
        return (
            <div className="card-box">
                <img className='card-logo' style={{backgroundColor: this.props.bgColor}} alt='cal' src={this.props.logo}/>
                <div className='value-box'>
                    <div className='card-value'>{this.props.data}{this.props.unit}</div>
                    <div className='card-text'>{this.props.text}</div>
                </div>
            </div>
        );
    };
};

KeyCard.propTypes = {
    data: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
};

export default KeyCard;
