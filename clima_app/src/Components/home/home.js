import './home.css';
import { useState, useContext, useEffect } from 'react';
// COMPONENTS
import Location from '../location/location';
import CurrentWeather from '../currentWeather/currentweather';
//MUI
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ItemDay from '../itemDay/itemDat';

const Home = () => {
    const [cityWeather, setCityWeather] = useState({});
    const apiKey = '311d43f885c66e8775d0a5959c5fd9b4';


    const getDataApi = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=Mar del Plata&appid=` + apiKey;
        /* let url = `https://api.openweathermap.org/data/2.5/weather?q=`+ cityName + `&appid=` + apiKey; */
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        setCityWeather(data);
    }

    useEffect( () => {
        getDataApi();
    },[]);

    return(
        <>
            {
                Object.keys(cityWeather).length !== 0 ?
                (
                    <div className='home-container'>
                        <Location cityWeather={cityWeather}/>
                        <CurrentWeather cityWeather={cityWeather}/>
                        <div className='calendar-container'>
                            <CalendarMonthIcon className='calendar'/>
                            <p>
                                Prevision semanal
                            </p>
                        </div>
                        <ItemDay />
                        <ItemDay />
                        <ItemDay />
                        <ItemDay />
                        <ItemDay />
                        <ItemDay />
                        <ItemDay />
                    </div>
                )
                :
                ""
            }
        </>
    );

}

export default Home;