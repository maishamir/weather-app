import React from 'react'
import "./Header.scss";
import logo from "/images/logo.svg";

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="" className='header__logo' />

            <h1 className='header__title'>How's the sky looking today?</h1>
        </header>   
    )
}

export default Header