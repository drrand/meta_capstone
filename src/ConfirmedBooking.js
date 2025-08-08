
const ConfirmationBooking = ({ formState: { resDate, resTime, guestNum, occasion } }) => {

    return (
        <>
            <h1>Booking Confirmed</h1>
            <div className="confirmation-table">
                <table>
                    <tbody>
                        <tr>
                            <td>Date:</td>
                            <td>{ resDate }</td>
                        </tr>
                        <tr>
                            <td>Time:</td>
                            <td>{ resTime }</td>
                        </tr>
                        <tr>
                            <td>Number of Guests:</td>
                            <td>{ guestNum }</td>
                        </tr>
                        <tr>
                            <td>Occasion:</td>
                            <td>{ occasion }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default ConfirmationBooking;