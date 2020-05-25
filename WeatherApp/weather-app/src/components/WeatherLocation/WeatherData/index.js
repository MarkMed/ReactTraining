import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperture from "./WeatherTemperature";
import WeatherTime from "./WeatherTime";
import PropTypes from "prop-types";

const WeatherData = ({data: {humidity, temperature, weatherState, wind}}) => {
    return (
        <div className="weatherDataContainer">
            <WeatherTime></WeatherTime>
            <WeatherTemperture 
                temperature={temperature}
                weatherState={weatherState}>

            </WeatherTemperture>
            <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
        </div>
    )
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        humidity: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.number.isRequired
    })
}

export default WeatherData;