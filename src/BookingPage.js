import BookingForm from "./BookingForm";

const BookingPage = ({availableTimes, updateTimes, formState, setFormState, submitAPI, submitForm}) => {
    return (
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} formState={formState} setFormState={setFormState} submitAPI={submitAPI} submitForm={submitForm} />
    )
}

export default BookingPage;
