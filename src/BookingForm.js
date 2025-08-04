import { useEffect, useState } from "react";

const BookingForm = () => {

    // const [formState, setFormState] = useState({
    //     resDate: '',
    //     resTime: '',
    //     guests: '',
    //     occasion: ''
    // });

    const [resDate, setResDate] = useState('');
    function handleResDateChange(event) {
        const {value} = event.target;
        setResDate(value);
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

    // function handleChange(event) {
    //     const { name, value } = event.target;
    //     // Handle form changes
    //     setFormState((prevState) => (
    //         {...prevState,[name]: value  } 
    //     ))
    // }

    // useEffect(() => console.log(formState), [formState])
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
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
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
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;