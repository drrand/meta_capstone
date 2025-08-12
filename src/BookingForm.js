
import AvailableTimes from "./AvailableTimes";

const BookingForm = ({
    availableTimes,
    updateTimes,
    formState,
    setFormState,
    submitAPI,
    submitForm,
}) => {

    function handleChange(event) {
        const { name, value } = event.target;
        // Handle form changes
        setFormState((prevState) => (
            {...prevState,[name]: value  } 
        ))
    }

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
                onChange={handleChange}
                value={formState.resTime}
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
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                name="occasion"
                id="occasion"
                onChange={handleChange}
                value={formState.occasion}
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