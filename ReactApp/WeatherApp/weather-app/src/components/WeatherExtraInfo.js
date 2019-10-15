import React from "react"

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div>
            <span>{`Humidity: ${humidity}% `}</span>
            <br></br>
            <span>{`Wind: ${wind}`}</span>
        </div>
    );
}

export default WeatherExtraInfo;