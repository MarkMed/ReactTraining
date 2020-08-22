import React from 'react';
import WeatherLocation from "./WeatherLocation"

const LocationList = ()=>(
		<div>
			<WeatherLocation city="Montevideo,uy"></WeatherLocation>
    		<WeatherLocation city="New York,usa"></WeatherLocation>
    		<WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
		</div>
	)
export default LocationList;