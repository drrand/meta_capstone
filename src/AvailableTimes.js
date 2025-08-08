


const AvailableTimes = ({availableTimes = []}) => {

    return (
        <>
           {
            availableTimes.map((time) => (
                <option key={time}>{time}</option>
            )
         )
        }
        </>
    );
}
export default AvailableTimes;