import Card from './Card';
import greekSalad from './images/GreekSalad.png';
import bruchetta from './images/Bruchetta.png';
import lemonDessert from './images/LemonDessert.png';
import Button from './Button';

const Specials = () => {

// Use State and Use Effect to call API to retrieve specials???

    return (
        <section className='Specials'>
                <div className='first-row'>
                    <h1>Specials</h1>
                    <Button text="Online Menu" />
                </div>
                <div className='second-row'>
                    <Card
                        img={greekSalad}
                        title='Greek Salad'
                        price='$12.99'
                        description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' />
                    <Card
                        img={bruchetta}
                        title='Bruchetta'
                        price='$5.99'
                        description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' />
                    <Card
                        img={lemonDessert}
                        title='Lemon Dessert'
                        price='$5.00'
                        description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />

                </div>
            </section>
    )
}

export default Specials;