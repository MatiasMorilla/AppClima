import {useEffect, useState, createContext} from 'react';

const apiKey = '311d43f885c66e8775d0a5959c5fd9b4';
const WeatherContext = createContext();



const WeatherProvider = ({children}) => {
    const [cityWeather, setCityWeather] = useState({});

    const getDataApi = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=Mar del Plata&appid=` + apiKey;
        /* let url = `https://api.openweathermap.org/data/2.5/weather?q=`+ cityName + `&appid=` + apiKey; */
        let res = await fetch(url);
        let data = await res.json();

        console.log(data);
        setCityWeather(data);
        console.log(cityWeather);
    }

    useEffect(() => {
        getDataApi();
    }, []);

    const data = {
        cityWeather
    }

    return(
        <WeatherContext.Provider value={data}>
            {children}
        </WeatherContext.Provider>
    );
}

export {WeatherProvider};
export default WeatherContext;