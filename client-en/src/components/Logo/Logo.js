import React from 'react';
import logo from '../../assets/logo.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='img-logo-container'>
            <img alt='logo' src={logo} />
        </div>
    )
}

export default Logo;
