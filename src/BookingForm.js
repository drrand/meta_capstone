import { useState } from "react";
import AvailableTimes from "./AvailableTimes";
import "./BookingForm.css";

const BookingForm = ({
    availableTimes,
    updateTimes,
    formState,
    setFormState,
    submitAPI,
    submitForm,
}) => {

    const [touched, setTouched] = useState(false);
    const [errors, setErrors] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
        // Handle form changes
        setFormState((prevState) => (
            { ...prevState, [name]: value }
        ))
    }

    function handleBlur(event) {
        const { name } = event.target;
        setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
        console.log(`Blurred: ${name}`);
        validateField(name, formState[name]);
    }

    const validateField = (name, value) => {
        let error = '';
        if (name === 'resDate' && new Date(value) < new Date()) {
            error = 'The reservation date must be for today or in the future';
        }

        setErrors((prevErrors) => ({
            ...prevErrors, [name]: error
        }))
    };



    function handleSubmit(event) {
        event.preventDefault();

        window.localStorage.setItem('formData', JSON.stringify(formState), [formState]);

        submitForm(
            {
                resDate: formState.resDate,
                resTime: formState.resTime,
                guestNum: formState.guestNum,
                occasion: formState.occasion
            })
    }

    return (
        <>
        <h1></h1>
        <form >
            <label htmlFor="resDate">Choose date</label>
            <input
                name="resDate"
                type="date"
                id="resDate"
                onChange={handleChange}
                value={formState.resDate}
                onBlur={handleBlur}
                required
            />
            {<p>{errors.resDate}</p>}

            <label htmlFor="resTime">Choose time</label>
            <select
                name="resTime"
                id="resTime"
                onChange={handleChange}
                value={formState.resTime}
                onBlur={handleBlur}
            >
                <AvailableTimes availableTimes={availableTimes} />
            </select>
            <label htmlFor="guestNum">Number of guests</label>
            <input
                name="guestNum"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guestNum"
                onChange={handleChange}
                value={formState.guestNum}
                onBlur={handleBlur}
                required
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                name="occasion"
                id="occasion"
                onChange={handleChange}
                value={formState.occasion}
                onBlur={handleBlur}
                required
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Just Because</option>
            </select>
            <input
                type="submit"
                value="Make Your reservation"
                onClick={(event) => handleSubmit(event)}
                disabled={(!touched.resDate || !touched.resTime || !touched.guestNum || !touched.occasion || errors.resDate )} />
        </form>
        </>
    )
}

export default BookingForm;