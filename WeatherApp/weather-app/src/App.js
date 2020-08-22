import React from 'react';
// import WeatherLocation from "./components/WeatherLocation"
import LocationList from "./components/LocationList"
import './App.css';

const cities = ["Montevideo,uy","New York,usa","Buenos Aires,ar"];

function App() {
  return (
    <div className="App">
		{/* <WeatherLocation city="Montevideo,uy"></WeatherLocation>
    	<WeatherLocation city="New York,usa"></WeatherLocation>
    	<WeatherLocation city="Buenos Aires,ar"></WeatherLocation> */}
		<LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
