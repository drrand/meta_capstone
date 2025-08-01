import { Route, Routes } from 'react-router';
import './Main.css';
import Homepage from './Homepage';
import OrderOnline from './OrderOnline';


const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/OrderOnline" element={<OrderOnline />} />
        </Routes>
    )
}

export default Main;