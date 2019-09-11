import React from "react"

const Location = ({city, neighbor}) => {
    return (
        <div>
            <h1>{city + ", " + neighbor}</h1>
        </div>
    );
}
export default Location;