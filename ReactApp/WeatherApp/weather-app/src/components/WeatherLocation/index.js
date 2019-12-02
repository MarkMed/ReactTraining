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
const data2 = {
    humidty: 100,
    temperature: 22,
    weatherState: RAIN,
    wind: 20
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

    updateClickFunction = () => {
        console.log("updated!")
        this.setState({
            location: {
                city: "Miami",
                neighbor: "Wynwood"
            },
            data: data2
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