import React from 'react';
import gear from "/images/icon-units.svg";
import arrow from "/images/icon-dropdown.svg";
import "./Dropdown.scss"
function Dropdown() {
    return (
        <div className='dropdown'>
            <button onClick={() => setOpen(!open)} className='dropdown__button'>
                <img src={gear} alt="units icon" />
                <p>Units</p>
                <img src={arrow} alt="dropdown arrow icon" />
            </button>
        </div>
    )
}

export default Dropdown