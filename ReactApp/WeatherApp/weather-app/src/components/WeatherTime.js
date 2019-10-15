import React from "react"

const WeatherTime = () => {
    let today = new Date();
    let date = `${today.getDay()} / ${today.getMonth()+1}/ ${today.getFullYear()}`;
    let hours = (today.getHours() % 12);
    let time = `${hours ? hours : 12} : ${today.getMinutes()} : ${today.getSeconds()} ${(today.getHours() <= 12) ? "am" : "pm"}`;
    return (
        <div>
            <span>{date}</span>
            <br></br>
            <span>{time}</span>
        </div>
    );
}

export default WeatherTime;