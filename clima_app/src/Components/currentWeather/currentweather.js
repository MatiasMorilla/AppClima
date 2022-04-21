import './currentweather.css';

//MUI
import LightModeIcon from '@mui/icons-material/LightMode';

const CurrentWeather = () => {
    return(
        <div className='cw-container'>
            <div className='cw-logo'>
                <LightModeIcon className='sun'/>
            </div>
            <div className='cw-header'>
                <p>Clima actual</p>
            </div>
            <div className='cw-deg'>
                <p>28/13c</p>
            </div>
            <div className='cw-footer'>
                <p>Soleado</p>
            </div>
        </div>
    );
}

export default CurrentWeather;