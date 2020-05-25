
const 
    urlBase = "http://api.openweathermap.org/data/2.5/weather",
    locationCity = "Montevideo,uy",
    apiKey = "60fa1fb04f78e369c50b0037c37cb0c3";
export const api_weather = `${urlBase}?q=${locationCity}&appid=${apiKey}`