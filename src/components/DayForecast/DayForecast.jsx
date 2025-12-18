import React from 'react'
import "./DayForecast.scss"
import sunImg from "/images/icon-sunny.webp";

function DayForecast() {
    return (
        <section className="dayForecast">
            <div className="parent">
                <div className='div1'>
                    Berlin, Germany
                    <small>Tuesday, Aug 5, 2025</small>
                    <img src={sunImg} alt="Sunny" className='dayForecast__icon' />
                    <h1>68°</h1>
                </div>
                <div className='div2'>
                    <small>Feels like </small>
                    <p>64°</p>
                </div>
                <div className='div3'>
                    <small>Humidity</small>
                    <p>46%</p>
                </div>
                <div className='div4'>
                    <small>Wind</small>
                    <p>9 mph</p>
                </div>
                <div className='div5'>
                    <small>Precipitation</small>
                    <p>0 in</p>
                </div>
            </div>
        </section>
    )
}

export default DayForecast