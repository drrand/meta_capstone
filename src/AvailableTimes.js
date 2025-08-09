


const AvailableTimes = ({availableTimes}) => {

    return (
        <>
           {
            availableTimes.map((time) => (
                <option index={time}>{time}</option>
            )
         )
        }
        </>
    );
}
export default AvailableTimes;