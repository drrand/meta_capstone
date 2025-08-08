

import { Route, Routes } from 'react-router';
import './Main.css';
import Homepage from './Homepage';
import OrderOnline from './OrderOnline';
import BookingPage from './BookingPage';
import { useReducer } from 'react';
import ConfirmedBooking from './ConfirmedBooking';

// "API Code" ————————————————————————————————————————————

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function (formData) {
    return true;
};

// END "API Code"  ————————————————————————————————————————————

export function initializeTimes(date) {

    return fetchAPI(date);

    // const timesArray = [
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "20:00",
    //     "21:00",
    //     "22:00"
    // ]
    // return (timesArray)
}


const Main = () => {
    
    const today = new Date();

    const initialTimes = initializeTimes(today);
    

    function timesReducer(state, action) {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return action.payload; // Update state with new available times
            default:
                return state; // Return current state of action type is not recognized
        }
    }

    // const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(timesReducer, initialTimes);

    function updateTimes(date) {
        let newTimes = fetchAPI(date);
        // const submittedTme = submittedTime;
        // const newTimes = availableTimes;
        dispatch({ type: 'UPDATE_TIMES', payload: newTimes })
    }

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])


    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Reservations" element={<BookingPage availableTimes={state} updateTimes={updateTimes} submitAPI={submitAPI} />} />
            <Route path="/OrderOnline" element={<OrderOnline />} />
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
    )
}

export default Main;