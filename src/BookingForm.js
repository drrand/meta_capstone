import { useEffect, useState } from "react";
import AvailableTimes from "./AvailableTimes";

const BookingForm = ({ 
    availableTimes, 
    updateTimes, 
    submitAPI,
    submitForm
  }) => {

    const [resDate, setResDate] = useState('');
    function handleResDateChange(event) {
        const { value } = event.target;
        setResDate(value);
        const selectedDate = new Date(value);
        updateTimes(selectedDate);
    }

    const [resTime, setResTime] = useState();
    function handleResTimeChange(event) {
        const {value} = event.target;
        setResTime(value);
    }

    const [guestNum, setGuestNum] = useState();
    function handleGuestNumChange(event) {
        const {value} = event.target;
        setGuestNum(value);
    }

    const [occasion, setOccasion] = useState();
    function handleOccasionChange(event) {
        const {value} = event.target;
        setOccasion(value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        submitForm(
            {
                resDate: resDate,
                resTime: resTime,
                guestNum: guestNum,
                occasion: occasion
        })
    }

    useEffect(()=>console.log(resDate),[resDate])
    useEffect(()=>console.log(resTime),[resTime])
    useEffect(()=>console.log(guestNum),[guestNum])
    useEffect(()=>console.log(occasion),[occasion])

    return (
        <form style={{
            display: 'grid',
            maxWidth: '200px',
            gap: '20px'
        }}>
            <label htmlFor="resDate">Choose date</label>
            <input
                name="resDate"
                type="date"
                id="resDate"
                onChange={(event) => handleResDateChange(event)}
                value={resDate}
            />
            <label htmlFor="resTime">Choose time</label>
            <select
                name="resTime"
                id="resTime"
                onChange={(event) =>handleResTimeChange(event)}
                value={resTime}
                >
                <AvailableTimes availableTimes={availableTimes}/>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                name="guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                onChange={(event) => handleGuestNumChange(event)}
                value={guestNum}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                name="occasion"
                id="occasion"
                onChange={handleOccasionChange}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input 
                type="submit" 
                value="Make Your reservation"
                onClick={(event) => handleSubmit(event)} />
        </form>
    )
}

export default BookingForm;