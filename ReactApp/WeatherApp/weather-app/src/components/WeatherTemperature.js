import React from "react";
import WeatherIcons from "react-weathericons";

const weatherIcon = {
    sunny: "day-sunny",
    fog: "day-fog",
    default: "day-cloudy"
}

function getWeatherIcon(weatherState){
    return (
        <WeatherIcons name={(weatherIcon[weatherState])?(weatherIcon[weatherState]):(weatherIcon.default)} size="2x"></WeatherIcons>
    );
}

const WeatherTemperture = ({temperature, weatherState}) => {
    return (
        <div>
            {getWeatherIcon(weatherState)}
            <span>{` ${temperature}°`}</span>
        </div>
    )
}

export default WeatherTemperture;