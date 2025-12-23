import React, { useState } from 'react';
import gear from "/images/icon-units.svg";
import arrow from "/images/icon-dropdown.svg";
import "./UnitsDropdown.scss"




function UnitsDropdown() {

    const [temperature, setTemperature] = useState("celsius");
    const [windSpeed, setWindSpeed] = useState("km/h");
    const [precipitation, setPrecipitation] = useState("mm");
    const [unit, setUnit] = useState("metric");

    const [open, setOpen] = useState(false);

    function setMetric() {
        setTemperature('celsius');
        setWindSpeed('km/h');
        setPrecipitation('mm');
        setUnit("metric");
    }

    function setImperial() {
        setTemperature('fahrenheit');
        setWindSpeed('mph');
        setPrecipitation('inches');
        setUnit("imperial");
    }

    return (

        <div className="units-dropdown">
            <button onClick={() => setOpen(!open)} className='units-dropdown__open'>
                <img src={gear} alt="units icon" />
                <p>Units</p>
                <img src={arrow} alt="dropdown arrow icon" />
            </button>

            {open &&
                (<form className="units-dropdown__form" action="">
                    <div className="units-dropdown__toggle">
                        {unit === 'metric' ? (
                            <button type='button' className="units-dropdown__button" onClick={setImperial}>
                                Switch to Imperial
                            </button>
                        ) : (
                            <button type='button' className="units-dropdown__button" onClick={setMetric}>
                                Switch to Metric
                            </button>
                        )}
                    </div>

                    <fieldset className="units-dropdown__fieldset">
                        <legend className="units-dropdown__legend">Temperature</legend>
                        <div className="units-dropdown__option">
                            <input
                                type="radio"
                                name="temperature"
                                id="celsius"
                                value="celsius"
                                className="units-dropdown__radio"
                                onChange={() => setTemperature('celsius')}
                                checked={temperature === 'celsius'}
                            />
                            <label htmlFor="celsius" className="units-dropdown__label">Celsius</label>
                        </div>
                        <div className="units-dropdown__option">
                            <input
                                type="radio"
                                name="temperature"
                                id="fahrenheit"
                                value="fahrenheit"
                                className="units-dropdown__radio"
                                onChange={() => setTemperature('fahrenheit')}
                                checked={temperature === 'fahrenheit'}
                            />
                            <label htmlFor="fahrenheit" className="units-dropdown__label">Fahrenheit</label>
                        </div>
                    </fieldset>

                    <fieldset className="units-dropdown__fieldset">
                        <legend className="units-dropdown__legend">Wind Speed</legend>
                        <div className="units-dropdown__option">
                            <input
                                type="radio"
                                name="wind-speed"
                                id="kmh"
                                value="km/h"
                                className="units-dropdown__radio"
                                onChange={() => setWindSpeed('km/h')}
                                checked={windSpeed === "km/h"}
                            />
                            <label htmlFor="kmh" className="units-dropdown__label">km/h</label>
                        </div>
                        <div className="units-dropdown__option">
                            <input
                                type="radio"
                                name="wind-speed"
                                id="mph"
                                value="mph"
                                className="units-dropdown__radio"
                                onChange={() => setWindSpeed('mph')}
                                checked={windSpeed === "mph"}
                            />
                            <label htmlFor="mph" className="units-dropdown__label">mph</label>
                        </div>
                    </fieldset>

                    <fieldset className="units-dropdown__fieldset">
                        <legend className="units-dropdown__legend">Precipitation</legend>
                        <div className="units-dropdown__option">
                            <input
                                type="radio"
                                name="precipitation"
                                id="mm"
                                value="mm"
                                className="units-dropdown__radio"
                                onChange={() => setPrecipitation("mm")}
                                checked={precipitation === "mm"}
                            />
                            <label htmlFor="mm" className="units-dropdown__label">Millimeters (mm)</label>
                        </div>
                        <div className="units-dropdown__option">
                            <input
                                type="radio"
                                name="precipitation"
                                id="inches"
                                value="inches"
                                className="units-dropdown__radio"
                                onChange={() => setPrecipitation("inches")}
                                checked={precipitation === "inches"}
                            />
                            <label htmlFor="inches" className="units-dropdown__label">Inches</label>
                        </div>
                    </fieldset>
                </form>)
            }
        </div>
    )
}

export default UnitsDropdown
