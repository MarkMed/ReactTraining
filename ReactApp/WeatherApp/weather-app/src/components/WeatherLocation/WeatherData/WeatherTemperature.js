import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";

const weatherIcon = {
    cloud: "cloud",
    default: "day-cloudy",
    fog: "day-fog",
    rain: "rain",
    snow: "snow",
    sun: "day-sunny"
}

function getWeatherIcon(weatherState){
    return (
        <WeatherIcons name={(weatherIcon[weatherState])?(weatherIcon[weatherState]):(weatherIcon.default)} size="2x"></WeatherIcons>
    );
}

const WeatherTemperture = ({temperature, weatherState}) => {
    return (
        <div className="weatherTemperatureContainer">
            {getWeatherIcon(weatherState)}
            <span>{` ${temperature}°`}</span>
        </div>
    )
}

WeatherTemperture.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperture;