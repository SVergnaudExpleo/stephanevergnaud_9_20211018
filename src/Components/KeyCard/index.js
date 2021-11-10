import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * This React component create a card containing the user key data
 *
 * @component
 * @class 
 * @param {any} data React component props give data to card
 * @param {string} text React component props configure card text 
 * @param {string} unit React component props Configure the unit of card 
 * @param {string} logo React component props give the card logo
 * @param {string} bgColor React component props configure the backgrond color of logo 
 * @author Stéphane
 * @version 1
 */

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
