import BookingForm from "./BookingForm";

const BookingPage = ({availableTimes, updateTimes}) => {
    return (
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
    )
}

export default BookingPage;
