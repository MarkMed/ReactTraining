const transformWeatherData = WeatherData => {
	const {humidity, temp} = WeatherData.main;
	const { speed } = WeatherData.wind;
	const weatherState = getWeatherState(WeatherData);
		
	const data = {	
		humidity,
		temperature: Math.round(temp - 273.15),
		weatherState,
		wind: speed
	}
	console.log("humidity, data", humidity, data)
	return data
}

const getWeatherState = WeatherData => {
	return WeatherData.weather[0].main
}

export default transformWeatherData