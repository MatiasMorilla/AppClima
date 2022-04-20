import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Components/home/home';

const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;