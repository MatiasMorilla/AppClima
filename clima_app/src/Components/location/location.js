import './location.css';
// MUI
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Location = ({cityWeather}) => {
    const date = new Date();

    return(
        <div className='location-container'>
            <div className='location-logo'>
                <LocationOnIcon />
            </div>
            <div className='location-name'>
                <p>{cityWeather.name} |</p>
                <p>{cityWeather.sys.country} </p>
            </div>
            <div className='location-date'>
                <p>Dia: {date.toLocaleDateString()} |</p>
                <p>Hora actual: {date.toLocaleTimeString()}</p>
            </div>
        </div>
    );
}

export default Location;