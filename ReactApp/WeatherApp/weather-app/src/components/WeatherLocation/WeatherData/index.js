import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperture from "./WeatherTemperature";
import WeatherTime from "./WeatherTime";

const WeatherData = ({data}) => {
    const {humidty, temperature, weatherState, wind} = data;
    return (
        <div className="weatherDataContainer">
            <WeatherTime></WeatherTime>
            <WeatherTemperture 
                temperature={temperature}
                weatherState={weatherState}>

            </WeatherTemperture>
            <WeatherExtraInfo humidity={humidty} wind={wind}></WeatherExtraInfo>
        </div>
    )
};

export default WeatherData;