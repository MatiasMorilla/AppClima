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
                        <ItemDay day={"Lunes"} temp_max={20} temp_min={15} icon={"01d"}/>
                        <ItemDay day={"Martes"} temp_max={22} temp_min={10} icon={"02d"}/>
                        <ItemDay day={"Miercoles"} temp_max={15} temp_min={6} icon={"03d"}/>
                        <ItemDay day={"Jueves"} temp_max={28} temp_min={20} icon={"04d"}/>
                        <ItemDay day={"Viernes"} temp_max={25} temp_min={23} icon={"02d"}/>
                        <ItemDay day={"Sabado"} temp_max={13} temp_min={10} icon={"01d"}/>
                        <ItemDay day={"Domingo"} temp_max={5} temp_min={0} icon={"04d"}/>
                    </div>
                )
                :
                ""
            }
        </>
    );

}

export default Home;