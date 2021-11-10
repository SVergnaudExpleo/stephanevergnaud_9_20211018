/**
 * This React component show a side bar on the left of page
 * 
 * @author Stéphane
 * @version 1
 */

import React from 'react';
import './styles.css';
import yoga from '../../Assets/yoga.svg';
import swim from '../../Assets/swiming.svg';
import cycle from '../../Assets/cycling.svg';
import strength from '../../Assets/strength.svg';

class Sidebar extends React.Component{
    render() {
        return (
            <div className='sidebar-box'>
                <div className='sideLogo-box'>
                    <img className='side-logo' alt='yoga' src={yoga} />
                    <img className='side-logo' alt='swim' src={swim} />
                    <img className='side-logo' alt='cycling' src={cycle} />
                    <img className='side-logo' alt='strength' src={strength} />
                </div>
                <div className='side-text'>
                    Copiryght, SportSee 2021
                </div>
            </div>
        );
    };
};

export default Sidebar;