import './home.css';
import { useState, useContext } from 'react';
// COMPONENTS
import Location from '../location/location';
import CurrentWeather from '../currentWeather/currentweather';
//MUI
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ItemDay from '../itemDay/itemDat';
// CONTEXT
import WeatherContext from '../../Context/weatherContext';

const Home = () => {
  /*   const {weather} = useContext(WeatherContext);

    console.log(weather); */

    return(
        <div className='home-container'>
            <Location />
            <CurrentWeather />
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
    );

}

export default Home;