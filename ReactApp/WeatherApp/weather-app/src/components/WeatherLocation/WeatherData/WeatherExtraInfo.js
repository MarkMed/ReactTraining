import React from "react"
import PropTypes from "prop-types";

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div>
            <span>{`Humidity: ${humidity}% `}</span>
            <br></br>
            <span>{`Wind: ${wind} m/s`}</span>
        </div>
    );
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;