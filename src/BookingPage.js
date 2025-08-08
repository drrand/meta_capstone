import BookingForm from "./BookingForm";

const BookingPage = ({availableTimes, updateTimes, submitAPI, submitForm}) => {
    return (
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitAPI={submitAPI} submitForm={submitForm} />
    )
}

export default BookingPage;
