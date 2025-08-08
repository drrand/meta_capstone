
const ConfirmationBooking = ({ submitForm }) => {

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
                            <td></td>
                        </tr>
                        <tr>
                            <td>Time:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Number of Guests:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Occasion:</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default ConfirmationBooking;