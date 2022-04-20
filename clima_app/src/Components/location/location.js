import './location.css';
// MUI
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Location = () => {
    return(
        <div className='location-container'>
            <div className='location-logo'>
                <LocationOnIcon />
            </div>
            <div className='location-name'>
                <p>Ciudad de La Plata /</p>
                <p>Argentina</p>
            </div>
            <div className='location-date'>
                <p>Dia:18/08/2022 /</p>
                <p>Hora actual: 11:55</p>
            </div>
        </div>
    );
}

export default Location;