import React, {Component} from "react";
import Location from "./Location"
import transformWeatherData from "../../services/transformWeatherData"
import { api_weather } from "../../services/api_url"
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
    humidity: 80,
    temperature: 27,
    weatherState: FOG,
    wind: 10
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            location: {
                city: "Miami",
                neighbor: "Wynwood"
            },
            data: data
        }
    }
    updateClickFunction = async () => {
        const infoRetrivedResponse = await fetch(api_weather);
        const infoRetrived = await infoRetrivedResponse.json();
        console.log("updated!", infoRetrived)//, infoRetrived)
        const newInfo = transformWeatherData(infoRetrived);
        this.setState({
            location: {
                city: "Miami",
                neighbor: "Wynwood"
            },
            data: newInfo
        });
    }

    render(){
        return(
            <div className="weatherLocationContainer">
                <Location city={this.state.location.city} neighbor={this.state.location.neighbor}></Location>
                <WeatherData data={this.state.data}></WeatherData>
                <button onClick={this.updateClickFunction}>Update Info</button>
            </div>
        );
    }
}

export default WeatherLocation;