// import react modules //
import React from 'react';
import PropTypes from 'prop-types';
// import preject component //
import './styles.css';

// main component //
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