import React from "react";
import PropTypes from "prop-types";

const Location = ({city, neighbor}) => {
    return (
        <div className="location">
            <h1>{city + ", " + neighbor}</h1>
        </div>
    );
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
    neighbor: PropTypes.string.isRequired

}
export default Location;