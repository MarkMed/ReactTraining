import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";

const cityComponent = (cities) => (
	cities.map((city)=>(<WeatherLocation city={city} key={city}></WeatherLocation>))
)

const LocationList = ({cities}) => (
	<div>
		{cityComponent(cities)}
	</div>
)

LocationList.propTypes = {
	cities: PropTypes.array.isRequired
}
export default LocationList;