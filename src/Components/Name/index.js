/**
 * This React component show the user name
 * 
 * @param this React component need firstName props as string
 * @author Stéphane
 * @version 0.1
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Name extends React.Component{
    render() {
        return (
            <div className='name-box'>
                <div className='hello-box'>
                    <div className='hello'>
                        Bonjour
                    </div>
                    <div className='name'>
                        {this.props.firstName}
                    </div>
                </div>
                <div className='congratulation'>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </div>
            </div>
        );
    };
};

Name.propTypes = {
    firstName: PropTypes.string.isRequired,
};

export default Name;