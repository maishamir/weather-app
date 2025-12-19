import React from 'react'
import "./DayForecast.scss"
import sunImg from "/images/icon-sunny.webp";

function DayForecast() {
    return (
        <section className="day-forecast">
            <div className="day-forecast__container">

                <div className="day-forecast__main">
                    <div className="day-forecast__loc-date">
                        <p className="day-forecast__location">Berlin, Germany</p>
                        <small className="day-forecast__date">Tuesday, Aug 5, 2025</small>
                    </div>



                    <div className="day-forecast__temperature">
                        <img
                            src={sunImg}
                            alt="Sunny"
                            className="day-forecast__icon"
                        /><p>20°</p>
                    </div>
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
                        <p className="day-forecast__stat-value">0 mm</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DayForecast
