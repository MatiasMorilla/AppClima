import './searchCity.css';
//MUI
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchCity = () => {

    return(
        <div className='searchCity-container'>
           <div>
                <Paper
                    className='searchCity-form'
                    component="form"
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
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