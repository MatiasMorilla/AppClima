import './searchCity.css';
//MUI
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const SearchCity = () => {
    const [redirect, setRedirect] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const showWeather = () => {
        setRedirect(true);
    }

    const searchHandle = (e) => {
        setSearchValue(e.target.value);
    }

    return(
        <div className='searchCity-container'>
            {
                redirect && <Navigate to={"/" + searchValue} />
            }
           <div>
                <Paper
                    className='searchCity-form'
                    component="form"
                    onSubmit={showWeather}
                >
                    <InputBase
                        value={searchValue}
                        onChange={searchHandle}
                        className='input-city'
                        placeholder="Buscar localidad"
                    />
                    <IconButton type="submit" >
                        <SearchIcon />
                    </IconButton>
                </Paper>
           </div>
        </div>
    );
}

export default SearchCity;