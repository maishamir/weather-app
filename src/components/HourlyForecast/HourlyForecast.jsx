import React, { useState } from 'react'
import overcastIcon from "/images/icon-overcast.webp";
import partlyCloudyIcon from "/images/icon-partly-cloudy.webp";
import sunnyIcon from "/images/icon-sunny.webp";
import snowIcon from "/images/icon-snow.webp";
import fogIcon from "/images/icon-fog.webp";
import arrowIcon from "/images/icon-dropdown.svg";
import "./HourlyForecast.scss";


function DayPicker() {
    const [open, setOpen] = useState("true")
    const [selectedDay, setSelectedDay] = useState("Tuesday");
    const days = [
        { name: "Monday", value: "mon" },
        { name: "Tuesday", value: "tue" },
        { name: "Wednesday", value: "wed" },
        { name: "Thursday", value: "thur" },
        { name: "Friday", value: "fri" },
        { name: "Saturday", value: "sat" },
        { name: "Sunday", value: "sun" }
    ];
    return (
        <div className='day-picker'>
            <button className="day-picker__trigger" onClick={() => setOpen(!open)}>
                {selectedDay}
                <img src={arrowIcon} alt="dropdown arrow" className="day-picker__arrow-icon" />
            </button>

            {open &&
                <form className='day-picker__list'>
                    {days.map((day, index) => {
                        return (
                            <div className='day-picker__day'>
                                <input type='radio' onClick={() => setSelectedDay(day.name)} className='day-picker__radio' name='day' id={day.value} />
                                <label htmlFor={day.value}>{day.name}</label>
                            </div>
                        );

                    })}

                </form>
            }

        </div>
    )
}

function HourlyForecast() {
    return (
        <section className="hourly-forecast">
            <div className="hourly-forecast__header">
                <h2 className="hourly-forecast__title">Hourly forecast</h2>
                {/* <button className="hourly-forecast__day-picker">
                    Tuesday
                    <img src={arrowIcon} alt="dropdown arrow" className="hourly-forecast__arrow-icon" />
                </button> */}
                <DayPicker />
            </div>
            <div className="hourly-forecast__hours">

                <div className="hourly-forecast__hour">
                    <div className="hourly-forecast__hour-time">
                        <img src={overcastIcon} alt="overcast" className="hourly-forecast__hour-icon" />
                        <p className="hourly-forecast__hour-label">3 PM</p>
                    </div>
                    <p className="hourly-forecast__hour-temp">20°</p>
                </div>

                <div className="hourly-forecast__hour">
                    <div className="hourly-forecast__hour-time">
                        <img src={partlyCloudyIcon} alt="partly cloudy" className="hourly-forecast__hour-icon" />
                        <p className="hourly-forecast__hour-label">4 PM</p>
                    </div>
                    <p className="hourly-forecast__hour-temp">20°</p>
                </div>

                <div className="hourly-forecast__hour">
                    <div className="hourly-forecast__hour-time">
                        <img src={sunnyIcon} alt="sunny" className="hourly-forecast__hour-icon" />
                        <p className="hourly-forecast__hour-label">5 PM</p>
                    </div>
                    <p className="hourly-forecast__hour-temp">20°</p>
                </div>

                <div className="hourly-forecast__hour">
                    <div className="hourly-forecast__hour-time">
                        <img src={overcastIcon} alt="overcast" className="hourly-forecast__hour-icon" />
                        <p className="hourly-forecast__hour-label">6 PM</p>
                    </div>
                    <p className="hourly-forecast__hour-temp">19°</p>
                </div>

                <div className="hourly-forecast__hour">
                    <div className="hourly-forecast__hour-time">
                        <img src={snowIcon} alt="snow" className="hourly-forecast__hour-icon" />
                        <p className="hourly-forecast__hour-label">7 PM</p>
                    </div>
                    <p className="hourly-forecast__hour-temp">18°</p>
                </div>

                <div className="hourly-forecast__hour">
                    <div className="hourly-forecast__hour-time">
                        <img src={fogIcon} alt="fog" className="hourly-forecast__hour-icon" />
                        <p className="hourly-forecast__hour-label">8 PM</p>
                    </div>
                    <p className="hourly-forecast__hour-temp">18°</p>
                </div>

                <div className="hourly-forecast__hour">
                    <div className="hourly-forecast__hour-time">
                        <img src={snowIcon} alt="snow" className="hourly-forecast__hour-icon" />
                        <p className="hourly-forecast__hour-label">9 PM</p>
                    </div>
                    <p className="hourly-forecast__hour-temp">17°</p>
                </div>

                <div className="hourly-forecast__hour">
                    <div className="hourly-forecast__hour-time">
                        <img src={overcastIcon} alt="overcast" className="hourly-forecast__hour-icon" />
                        <p className="hourly-forecast__hour-label">10 PM</p>
                    </div>
                    <p className="hourly-forecast__hour-temp">17°</p>
                </div>
            </div>
        </section>
    )
}

export default HourlyForecast
