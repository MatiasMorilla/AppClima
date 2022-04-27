import './currentweather.css';


const CurrentWeather = ({cityWeather}) => {
    const temp_max = parseInt(cityWeather.main.temp_max - 273.15);
    const temp_min = parseInt(cityWeather.main.temp_min - 273.15);
    console.log(cityWeather.weather[0].icon);

    return(
        <div className='cw-container'>
            <div className='cw-logo'>
                <img 
                    src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/` + cityWeather.weather[0].icon + `.png`}
                    className='weather-icon'
                />
            </div>
            <div className='cw-header'>
                <p>Clima actual</p>
            </div>
            <div className='cw-deg'>
                <p>{temp_max}<span>/{temp_min} °C</span></p>
            </div>
            <div className='cw-footer'>
                <p>{cityWeather.weather[0].description}</p>
            </div>
        </div>
    );
}

export default CurrentWeather;