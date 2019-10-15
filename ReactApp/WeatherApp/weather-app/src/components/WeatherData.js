import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperture from "./WeatherTemperature";
import WeatherTime from "./WeatherTime";

const WeatherData = () => (
    <div>
        <WeatherTime></WeatherTime>
        <WeatherTemperture 
            temperature={25}
            weatherState={"sunny"}>

        </WeatherTemperture>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;