import React from 'react'
import "./DayForecast.scss"
import sunImg from "/images/icon-sunny.webp";

function DayForecast() {
    return (
        <section className="day-forecast">
            <div className="day-forecast__container">

                <div className="day-forecast__main">
                    <p className="day-forecast__location">Berlin, Germany</p>
                    <small className="day-forecast__date">Tuesday, Aug 5, 2025</small>

                    <img
                        src={sunImg}
                        alt="Sunny"
                        className="day-forecast__icon"
                    />

                    <h1 className="day-forecast__temperature">20°</h1>
                </div>

                <div className="day-forecast__stats">
                    <div className="day-forecast__stat">
                        <small className="day-forecast__stat-label">Feels like</small>
                        <p className="day-forecast__stat-value">18°</p>
                    </div>

                    <div className="day-forecast__stat">
                        <small className="day-forecast__stat-label">Humidity</small>
                        <p className="day-forecast__stat-value">46%</p>
                    </div>

                    <div className="day-forecast__stat">
                        <small className="day-forecast__stat-label">Wind</small>
                        <p className="day-forecast__stat-value">14 km/h</p>
                    </div>

                    <div className="day-forecast__stat">
                        <small className="day-forecast__stat-label">Precipitation</small>
                        <p className="day-forecast__stat-value">0 in</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DayForecast
