// import react modules //
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import preject component //
import './styles.css'

// main component //
class Header extends React.Component{
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
            <div>
              <img alt='logo' src='../' />
              <Link className='header-link' to={'/'} >
                Accueil
              </Link>
            </div>
        )
    }
}

Header.propTypes = {
}

export default Header



