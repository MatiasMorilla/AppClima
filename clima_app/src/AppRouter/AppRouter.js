import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Components/home/home';
import SearchCity from '../Components/seacrhCity/searchCity';

const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/SearchCity' element={<SearchCity />}/>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;