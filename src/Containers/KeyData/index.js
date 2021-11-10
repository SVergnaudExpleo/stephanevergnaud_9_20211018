import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import KeyCard from '../../Components/KeyCard';
import calorieLogo from '../../Assets/calories.svg';
import protLogo from '../../Assets/proteins.svg';
import gluLogo from '../../Assets/apple.svg';
import lipLogo from '../../Assets/cheeseburger.svg';

/**
 * This React component create a grop of configurated KeyCard
 * 
 * @component
 * @class
 * @param {object} keyDatas React component props set datas
 * @author Stéphane
 * @version 1
 */

class KeyData extends React.Component{
    render() {
        return (
            <div className='data-box'>
                <KeyCard 
                    data={this.props.keyDatas.calorieCount} 
                    text={"Calories"} unit={"kCal"} 
                    logo={calorieLogo} 
                    bgColor={"rgba(255, 0, 0, 0.07)"} 
                />
                <KeyCard 
                    data={this.props.keyDatas.proteinCount} 
                    text={"Proteines"} 
                    unit={"g"} 
                    logo={protLogo} 
                    bgColor={"rgba(74, 184, 255, 0.1)"} 
                />
                <KeyCard 
                    data={this.props.keyDatas.carbohydrateCount} 
                    text={"Glucides"} 
                    unit={"g"} 
                    logo={gluLogo} 
                    bgColor={"rgba(249, 206, 35, 0.1)"} 
                />
                <KeyCard 
                    data={this.props.keyDatas.lipidCount} 
                    text={"Lipides"} 
                    unit={"g"} 
                    logo={lipLogo} 
                    bgColor={"rgba(253, 81, 129, 0.1)"} 
                />
            </div>
        );
    };
};

KeyData.propTypes = {
    keyDatas: PropTypes.object.isRequired,
};

export default KeyData;