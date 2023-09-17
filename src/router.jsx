import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TecketingSystem from './pages/ticketing-system';
import DateOfBirth from './pages/date-of-birth';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="ticketing-system" element={<TecketingSystem />} />
                <Route path="date-of-birth" element={<DateOfBirth />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
