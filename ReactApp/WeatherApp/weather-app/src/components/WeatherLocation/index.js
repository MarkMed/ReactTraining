import React, {Component} from "react";
import Location from "./Location"
import WeatherData from "./WeatherData"
import "../css/styles.css";
import { 
    CLOUD,
    FOG,
    RAIN,
    SNOW,
    SUN 
} from "../../constants/weatherStates";

const data = {
    humidty: 80,
    temperature: 27,
    weatherState: FOG,
    wind: 10
}

class WeatherLocation extends Component {
    render(){
        return(
            <div className="weatherLocationContainer">
                <Location city={"Miami"} neighbor={"Wynwood"}></Location>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}

export default WeatherLocation;