import React from "react"

const WeatherTemperture = (props) => {
    console.log(props);
    return (
        <div>{props.temperature}</div>
    )
}

export default WeatherTemperture;