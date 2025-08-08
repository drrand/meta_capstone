import BookingForm from "./BookingForm";

const BookingPage = ({availableTimes, updateTimes, submitAPI}) => {
    return (
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitAPI={submitAPI}/>
    )
}

export default BookingPage;
