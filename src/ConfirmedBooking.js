import { useState, useEffect } from 'react';

const ConfirmationBooking = ({ formState: { resDate, resTime, guestNum, occasion } }) => {

    const [bookingData, setBookingData] = useState('');

    useEffect(()=> {
        setBookingData(JSON.parse(window.localStorage.getItem('formData')))
        console.log(bookingData);
}, []);

    const bookingArray = [
        {"Date:": bookingData.resDate},
        {"Time:": bookingData.resTime},
        {"Number of Guests:": bookingData.guestNum},
        {"Occasion:": bookingData.occasion}
    ];

    return (
        <>
            <h1>Booking Confirmed</h1>
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