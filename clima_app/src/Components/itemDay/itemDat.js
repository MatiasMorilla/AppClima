import './itemDay.css';
//MUI
import LightModeIcon from '@mui/icons-material/LightMode';

const ItemDay = () => {
    return(
        <div className='itemDay-container'>
            <div className='itemDat-logo'>
                <LightModeIcon />
            </div>
            <div className='itemDat-day'>
                Lunes
            </div>
            <div className='itemDat-deg'>
                24/15c
            </div>
        </div>
    );

}

export default ItemDay;