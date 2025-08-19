import { useState, useEffect } from 'react';
import './ConfirmedBooking.css';

const ConfirmationBooking = () => {

    const [bookingData, setBookingData] = useState('');

    useEffect(()=> {
        const bookingData = window.localStorage.getItem('formData');
        if (bookingData) {
            setBookingData(JSON.parse(bookingData))
            console.log(bookingData);
        }
}, []);

    const bookingArray = [
        {"Date:": bookingData.resDate},
        {"Time:": bookingData.resTime},
        {"Number of Guests:": bookingData.guestNum},
        {"Occasion:": bookingData.occasion}
    ];

    return (
        <>
            <h1 className='ConfirmedBooking'>Booking Confirmed!</h1>
            <div className="confirmation-table">
                <table>
                    <tbody>
                        {
                            bookingArray.map((data) => (
                                    <tr key={Object.keys(data)}>
                                        <td>{Object.keys(data)}</td>
                                        <td>{Object.values(data)}</td>
                                    </tr>
                                )
                            )}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default ConfirmationBooking;