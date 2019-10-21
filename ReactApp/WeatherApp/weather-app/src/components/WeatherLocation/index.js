import React from "react";
import Location from "./Location"
import WeatherData from "./WeatherData"
import "../css/styles.css";

const WeatherLocation = () => (
    <div className="weatherLocationContainer">
        <Location city={"Miami"} neighbor={"Wynwood"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;