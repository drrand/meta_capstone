import { Route, Routes } from 'react-router';
import './Main.css';
import Homepage from './Homepage';
import OrderOnline from './OrderOnline';
import BookingPage from './BookingPage';


const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Reservations" element={<BookingPage />} />
            <Route path="/OrderOnline" element={<OrderOnline />} />
        </Routes>
    )
}

export default Main;