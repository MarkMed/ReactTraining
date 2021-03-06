import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {weatherIcon} from '../../../constants/weatherStates'


function getWeatherIcon(weatherState){
    return (
        <WeatherIcons className="weatherIcon" name={(weatherIcon[weatherState])?(weatherIcon[weatherState]):(weatherIcon.default)} size="4x"></WeatherIcons>
    );
}

const WeatherTemperture = ({temperature, weatherState}) => {
    return (
        <div className="weatherTemperatureContainer">
            {getWeatherIcon(weatherState)}
            <span>{` ${temperature}°C`}</span>
        </div>
    )
}

WeatherTemperture.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperture;