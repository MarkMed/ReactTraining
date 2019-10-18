import React from "react";
import PropTypes from "prop-types";

const Location = ({city: myCity, neighbor: myNeigh}) => {
    return (
        <div>
            <h1>{myCity + ", " + myNeigh}</h1>
        </div>
    );
}

Location.propTypes = {
    myCity: PropTypes.string.isRequired,
    myNeigh: PropTypes.string.isRequired

}
export default Location;