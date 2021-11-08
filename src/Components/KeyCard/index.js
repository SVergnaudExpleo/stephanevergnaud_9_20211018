/**
 * This React component create a card containing the user key data
 * 
 * @param This React component need data as props
 * @param This React component need text props as string
 * @param This React component need unit props as string
 * @param This React component need logo props as string
 * @param This React component need bgColor props as string
 * @author Stéphane
 * @version 0.1
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

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
