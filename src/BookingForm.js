import { useEffect, useState } from "react";

const BookingForm = () => {

    const [formState, setFormState] = useState({
        resDate: '',
        resTime: '',
        guests: '',
        occasion: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        // Handle form changes
        setFormState((prevState) => (
            {...prevState,[name]: value  } 
        ))
    }

    useEffect(() => console.log(formState), [formState])

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
                onChange={handleChange} 
                value={formState.resDate}
                />
            <label htmlFor="resTime">Choose time</label>
            <select 
                name="resTime" 
                id="resTime"
                onChange={handleChange}>
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
                onChange={handleChange} 
                />
            <label htmlFor="occasion">Occasion</label>
            <select 
                name="occasion" 
                id="occasion"
                onChange={handleChange}
                >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;