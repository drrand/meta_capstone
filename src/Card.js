import './Card.css'

const Card = ({img, title, price, description}) => {
    return (
        <div className='card'>
            <img src={img} alt={`Image showing ${title}`}></img>
            <div className='card content'>
                <p>{title}</p>
                <p>{price}</p>
                <p>{description}</p>
                <p>Order a delivery</p>
            </div>
        </div>

    )
}

export default Card;