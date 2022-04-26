import './home.css';
import { useState, useEffect } from 'react';
// COMPONENTS
import Location from '../location/location';
import CurrentWeather from '../currentWeather/currentweather';
//MUI
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ItemDay from '../itemDay/itemDat';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const apiKey = '311d43f885c66e8775d0a5959c5fd9b4';

const Home = () => {
    const [cityWeather, setCityWeather] = useState({});
    const [latitude, setLatitude] = useState(1);
    const [longitude, setLongitude] = useState(1);
    const {cityName} = useParams();


    const getDataApi = async () => {
        let url = "";
        if(cityName)
        {
            url = `https://api.openweathermap.org/data/2.5/weather?q=`+ cityName + `&appid=` + apiKey;
        }
        else
        {
            url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude +'&lon=' + longitude +'&appid=' + apiKey;
        }

        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        console.log(data.weather[0].icon);
        setCityWeather(data);
    }

    useEffect( () => {
        getDataApi();
    },[latitude, longitude]);

    return(
        <>
            {
                Object.keys(cityWeather).length !== 0?
                (
                    <div className='home-container'>
                        {
                            navigator.geolocation.getCurrentPosition( (position) =>{
                                setLatitude(parseInt(position.coords.latitude));
                                setLongitude(parseInt(position.coords.longitude));
                            })
                        }
                        <Link to={"/SearchCity"}>
                            <Button className='btn-addCity' size='small'>
                                +
                            </Button>
                        </Link>
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