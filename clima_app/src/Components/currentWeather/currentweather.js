import './currentweather.css';

//MUI
import LightModeIcon from '@mui/icons-material/LightMode';

const CurrentWeather = ({cityWeather}) => {
    const temp_max = parseInt(cityWeather.main.temp_max - 273.15);
    const temp_min = parseInt(cityWeather.main.temp_min - 273.15);


    return(
        <div className='cw-container'>
            <div className='cw-logo'>
                <LightModeIcon className='sun'/>
            </div>
            <div className='cw-header'>
                <p>Clima actual</p>
            </div>
            <div className='cw-deg'>
                <p>{temp_max}/ {temp_min} °C</p>
            </div>
            <div className='cw-footer'>
                <p>Soleado</p>
            </div>
        </div>
    );
}

export default CurrentWeather;