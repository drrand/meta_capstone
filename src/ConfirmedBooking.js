

const ConfirmationBooking = ({ formState: { resDate, resTime, guestNum, occasion } }) => {

    const bookingArray = [
        {"Date:": resDate},
        {"Time:": resTime},
        {"Number of Guests:": guestNum},
        {"Occasion:": occasion}
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