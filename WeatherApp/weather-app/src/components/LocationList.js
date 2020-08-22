import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";


const LocationList = ({cities, onSelectedLocation}) => {
	const handleWeatherLocatClick = (city) => {
		console.log("handleClick en weatherLocation!", city);
		onSelectedLocation(city);
	}
	const cityComponent = (cities) => (
		cities.map(
			(city)=>(
				<WeatherLocation
					city={city} 
					key={city}
					onWeatherLocationClick={()=>{handleWeatherLocatClick(city)}}
				>
				</WeatherLocation>
			)
		)

	)
	
	return (
		<div>
			{cityComponent(cities)}
		</div>
	)
}

LocationList.propTypes = {
	cities: PropTypes.array.isRequired,
	onSelectedLocation: PropTypes.func
}
export default LocationList;