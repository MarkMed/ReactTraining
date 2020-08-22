import React from 'react';
// import WeatherLocation from "./components/WeatherLocation"
import LocationList from "./components/LocationList"
import './App.css';

const cities = ["Montevideo,uy","New York,usa","Buenos Aires,ar"];

function App() {
  const handleSelectedLocation = (city)=>{
	console.log("App escuchó > handleSelectLocation!", city);
  }
  return (
    <div className="App">
		<LocationList
			cities={cities}
			onSelectedLocation={handleSelectedLocation}
		></LocationList>
    </div>
  );
}

export default App;
