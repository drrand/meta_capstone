
const ConfirmationBooking = ({ resDate, resTime, guestNum, occasion }) => {

    return (
        <>
            <h1>Booking Confirmed</h1>
            <div className="confirmation-table">
                <table>
                    {/* <thead>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>Date:</td>
                            <td>{ resDate ? resDate : "Unspecified" }</td>
                        </tr>
                        <tr>
                            <td>Time:</td>
                            <td>{ resTime ? resTime : "Unspecified" }</td>
                        </tr>
                        <tr>
                            <td>Number of Guests:</td>
                            <td>{ guestNum ? guestNum : "Unspecified" }</td>
                        </tr>
                        <tr>
                            <td>Occasion:</td>
                            <td>{ occasion ? occasion : "Unspecified" }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default ConfirmationBooking;