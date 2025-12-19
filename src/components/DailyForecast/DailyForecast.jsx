import React from 'react'
import rainIcon from '/images/icon-rain.webp';
import drizzleIcon from '/images/icon-drizzle.webp';
import sunIcon from '/images/icon-sunny.webp';
import partlyCloudyIcon from '/images/icon-partly-cloudy.webp';
import stormIcon from '/images/icon-storm.webp';
import snowIcon from "/images/icon-snow.webp";
import fogIcon from "/images/icon-fog.webp";
import "./DailyForecast.scss"

function DailyForecast() {
    return (
        <section className='daily-forecast'>
            <h2 className='daily-forecast__heading'>Daily forecast</h2>

            <div className="daily-forecast__container">

                <div className="daily-forecast__day">
                    <p className="daily-forecast__day-name">Tue</p>
                    <img src={rainIcon} alt="rain" className="daily-forecast__icon" />
                    <div className="daily-forecast__day-temps">
                        <p className="daily-forecast__day-temps--high">20°</p>
                        <p className="daily-forecast__day-temps--low">14°</p>
                    </div>
                </div>

                <div className="daily-forecast__day">
                    <p className="daily-forecast__day-name">Wed</p>
                    <img src={drizzleIcon} alt="drizzle" className="daily-forecast__icon" />
                    <div className="daily-forecast__day-temps">
                        <p className="daily-forecast__day-temps--high">21°</p>
                        <p className="daily-forecast__day-temps--low">15°</p>
                    </div>
                </div>

                <div className="daily-forecast__day">
                    <p className="daily-forecast__day-name">Thu</p>
                    <img src={sunIcon} alt="rain" className="daily-forecast__icon" />
                    <div className="daily-forecast__day-temps">
                        <p className="daily-forecast__day-temps--high">24</p>
                        <p className="daily-forecast__day-temps--low">14°</p>
                    </div>
                </div>

                <div className="daily-forecast__day">
                    <p className="daily-forecast__day-name">Fri</p>
                    <img src={partlyCloudyIcon} alt="partly cloudy" className="daily-forecast__icon" />
                    <div className="daily-forecast__day-temps">
                        <p className="daily-forecast__day-temps--high">25°</p>
                        <p className="daily-forecast__day-temps--low">13°</p>
                    </div>
                </div>

                <div className="daily-forecast__day">
                    <p className="daily-forecast__day-name">Sat</p>
                    <img src={stormIcon} alt="storm" className="daily-forecast__icon" />
                    <div className="daily-forecast__day-temps">
                        <p className="daily-forecast__day-temps--high">21°</p>
                        <p className="daily-forecast__day-temps--low">15°</p>
                    </div>
                </div>

                <div className="daily-forecast__day">
                    <p className="daily-forecast__day-name">Sun</p>
                    <img src={snowIcon} alt="snow" className="daily-forecast__icon" />
                    <div className="daily-forecast__day-temps">
                        <p className="daily-forecast__day-temps--high">25°</p>
                        <p className="daily-forecast__day-temps--low">16°</p>
                    </div>
                </div>

                <div className="daily-forecast__day">
                    <p className="daily-forecast__day-name">Mon</p>
                    <img src={fogIcon} alt="fog" className="daily-forecast__icon" />
                    <div className="daily-forecast__day-temps">
                        <p className="daily-forecast__day-temps--high">24°</p>
                        <p className="daily-forecast__day-temps--low">15°</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DailyForecast