import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperture from "./WeatherTemperature";
import WeatherTime from "./WeatherTime";
import { 
    CLOUD,
    FOG,
    RAIN,
    SNOW,
    SUN 
} from "../constants/weatherStates";

const WeatherData = () => (
    <div>
        <WeatherTime></WeatherTime>
        <WeatherTemperture 
            temperature={25}
            weatherState={FOG}>

        </WeatherTemperture>
        <WeatherExtraInfo humidity={80} wind={10}></WeatherExtraInfo>
    </div>
);

export default WeatherData;