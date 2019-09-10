import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperture from "./WeatherTemperature";

const WeatherData = () => (
    <div>
        <WeatherTemperture></WeatherTemperture>
        <WeatherExtraInfo></WeatherExtraInfo>
    </div>
);

export default WeatherData;