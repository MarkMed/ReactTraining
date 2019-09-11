import React from "react";
import Location from "./Location"
import WeatherData from "./WeatherData"

const WeatherLocation = () => (
    <div>
        <Location city={"Miami"} neighbor={"Wynwood"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;