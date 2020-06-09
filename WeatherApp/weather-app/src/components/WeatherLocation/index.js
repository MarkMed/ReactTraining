import React, {Component} from "react";
import Loading from "../Loading"
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

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            location: {
                city: "Miami",
                neighbor: "Wynwood"
            },
            data: null
		}
		console.log("constructor running!");
	}
	
	componentDidMount(){
		console.log("didMount running!");
		this.updateData();
	}

	componentDidUpdate(){
		console.log("didUpdate running!");
	}
    updateData = async () => {
        const infoRetrivedResponse = await fetch(api_weather);
        const infoRetrived = await infoRetrivedResponse.json();
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
				{(this.state.data)
					?<WeatherData data={this.state.data}></WeatherData>
					:<Loading caption="Loading..." animated={true}></Loading>
				}
            </div>
        );
    }
}

export default WeatherLocation;