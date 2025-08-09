import "./CardTestimonial.css";

const TestimonialCard = ({src, FirstName, Review_Text, stars}) => {
        let starString = "";
        for (let i = 0; i < stars; i++) {
            starString = starString + '⭐️';
        }
    return(
            <div className='test_card'>
                <img src={src} alt={`${FirstName}`}></img>
                <div className='stars'>{starString}</div>
                <h5>{FirstName}</h5>
                <p>{Review_Text}</p>
            </div>

    )
}

export default TestimonialCard;