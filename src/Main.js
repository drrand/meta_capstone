import { Route, Routes, } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import Homepage from './Homepage';
import OrderOnline from './OrderOnline';
import BookingPage from './BookingPage';
import { useState, useReducer } from 'react';
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
    
}

const Main = () => {
    // State Lifted from Booking Form

        const [formState, setFormState] = useState({
        resDate: '',
        resTime: '',
        guests: '',
        occasion: ''
    });

    // End State Lift

    const navigate = useNavigate();

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate('/ConfirmedBooking');
        }
    }

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
        const newTimes = fetchAPI(date);
        dispatch({ type: 'UPDATE_TIMES', payload: newTimes })
    }


    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/OrderOnline" element={<OrderOnline />} />
            <Route path="/Reservations" element={<BookingPage updateTimes={updateTimes} availableTimes={state} submitForm={submitForm} formState={formState} setFormState={setFormState} />} />
            <Route path="/ConfirmedBooking" element={<ConfirmedBooking  formState={formState}/>} />
        </Routes>
    )
}

export default Main;