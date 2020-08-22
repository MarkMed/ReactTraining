import React, {Component} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Loading from "../Loading"
import {PropTypes} from "prop-types";
import Location from "./Location";
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity";
import transformWeatherData from "../../services/transformWeatherData";
import WeatherData from "./WeatherData";
import "../css/styles.css";

class WeatherLocation extends Component {

    constructor(props){
		console.log("constructor running!");
		super(props);
		const {city} = props;
        this.state = {
            location: {
                city,
            },
            data: null
		}
	}
	
	componentDidMount(){
		console.log("didMount running!");
		this.updateData();
	}

	componentDidUpdate(){
		console.log("didUpdate running!");
	}
    updateData = async () => {
		const api_weather = getUrlWeatherByCity(this.state.location.city);
        const infoRetrivedResponse = await fetch(api_weather);
		const infoRetrived = await infoRetrivedResponse.json();
		console.log(infoRetrived)
        const newInfo = transformWeatherData(infoRetrived);
        this.setState({
            data: newInfo
        });
    }

    render(){
		const {onWeatherLocationClick} = this.props;
		const {data} = this.state;
		const {city} = this.state.location;
        return(
            <div className="weatherLocationContainer" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
				{(data)
					?<WeatherData data={data}></WeatherData>
					:<CircularProgress></CircularProgress>//<Loading caption="Loading..." animated={true}></Loading>
				}
            </div>
        );
    }
}

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;