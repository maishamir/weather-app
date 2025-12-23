import React from 'react'
import "./Header.scss";
import logo from "/images/logo.svg";
import UnitsDropdown from '../UnitsDropdown/UnitsDropdown';

function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <img src={logo} alt="" className='header__logo' />
                <UnitsDropdown />
            </nav>

            <h1 className='header__title'>How's the sky looking today?</h1>
        </header>
    )
}

export default Header