// import react modules //
import React from 'react'
import { Link } from 'react-router-dom'
// import preject component //
import './styles.css'
import logo from '../../Assets/logo.svg'

// main component //
class Header extends React.Component{
    render() {
        return (
            <div className='header-box'>
              <img className='header-logo' alt='SportSee' src={logo} />
              <div className='header-link' > Accueil </div>
              <div className='header-link'> Profil </div>
              <div className='header-link'> Réglage </div>
              <div className='header-link'> Communauté </div>
            </div>
        )
    }
}

export default Header