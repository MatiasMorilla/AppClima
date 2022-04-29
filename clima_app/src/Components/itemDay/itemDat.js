import './itemDay.css';

const ItemDay = ({day, temp_max, temp_min, icon}) => {
    return(
        <div className='itemDay-container'>
            <div className='itemDay-logo'>
                <img 
                    src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/` + icon + `.png`}
                    className='weather-icon'
                />
            </div>
            <div className='itemDay-day'>
                {day}  
            </div>
            <div className='itemDay-deg'>
                <p>{temp_max}<span>/{temp_min} °C</span></p>
            </div>
        </div>
    );

}

export default ItemDay;