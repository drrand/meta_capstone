import { Route, Routes } from 'react-router';
import './Main.css';
import Homepage from './Homepage';
import OrderOnline from './OrderOnline';
import BookingPage from './BookingPage';
import { useReducer } from 'react';

export function initializeTimes() {
    const timesArray = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]
    return (timesArray)
}

const Main = () => {
    
    
    const initialTimes = initializeTimes();
    
    
    function timesReducer(availableTimes, action) {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return action.payload; // Update state with new available times
            default:
                return availableTimes; // Return current state of action type is not recognized
        }
    }

    // const [state, dispatch] = useReducer(reducer, initialState);
    const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

    function updateTimes(submittedTime) {
        const submittedTme = submittedTime;
        const newTimes= availableTimes;
        dispatch({ type: 'UPDATE_TIMES', payload: newTimes })
        return (availableTimes)
    }


    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Reservations" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes}/>} />
            <Route path="/OrderOnline" element={<OrderOnline />} />
        </Routes>
    )
}

export default Main;