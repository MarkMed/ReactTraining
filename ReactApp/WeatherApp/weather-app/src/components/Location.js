import React from "react"

const Location = ({city: myCity, neighbor: myNeigh}) => {
    return (
        <div>
            <h1>{myCity + ", " + myNeigh}</h1>
        </div>
    );
}
export default Location;