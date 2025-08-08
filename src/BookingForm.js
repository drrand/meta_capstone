import { useEffect, useState } from "react";
import AvailableTimes from "./AvailableTimes";

const BookingForm = ({ availableTimes, updateTimes }) => {

    const [resDate, setResDate] = useState('');
    function handleResDateChange(event) {
        const { value } = event.target;
        setResDate(value);
    }

    const [resTime, setResTime] = useState();
    function handleResTimeChange(event) {
        const { value } = event.target;
        setResTime(value);
        // updateTimes(value);
    }

    const [guestNum, setGuestNum] = useState();
    function handleGuestNumChange(event) {
        const { value } = event.target;
        setGuestNum(value);
    }

    const [occasion, setOccasion] = useState();
    function handleOccasionChange(event) {
        const { value } = event.target;
        setOccasion(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        updateTimes(resTime);
    }

    // useEffect(() => console.log(`The Date Selected is ${resDate}`), [resDate])
    // useEffect(() => console.log(`The Time Selected is ${resTime}`), [resTime])
    // useEffect(() => console.log(`The Number of Guests Selected is ${guestNum}`), [guestNum])
    // useEffect(() => console.log(`The Occasion Selected is ${occasion}`), [occasion])

    return (
        <>
            <h2>Book Now</h2>
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
                    onChange={(event) => handleResTimeChange(event)}
                    value={resTime}
                >
                    <AvailableTimes availableTimes={availableTimes} />
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    name="guests"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    onChange={handleGuestNumChange}
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
                    onClick={(event) => handleSubmit(event)}
                     />
            </form>
        </>

    )
}

export default BookingForm;