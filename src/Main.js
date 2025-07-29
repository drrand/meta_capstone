import heroImg from './images/heroChef.png';
import review1 from './images/review1.jpg';
import review2 from './images/sophia.jpg';
import review3 from './images/Elias.jpg';
import review4 from './images/fatima.jpg';
import aboutphoto from './images/2chefs.png';
import './Main.css';
import Card from './Card';
import greekSalad from './images/GreekSalad.png';
import bruchetta from './images/Bruchetta.png';
import lemonDessert from './images/LemonDessert.png';
import Card_Testimonial from './Card_Testimonial';

const Main = () => {
    return (
        <main>
            <section className='hero'>
                    <div className='column1'>
                        <div className='text-section'>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <button>Reserve a Table</button>
                    </div>
                    <div className='column2'>
                        <img src={heroImg}></img>
                    </div>
            </section>
            <section className='Specials'>
                <div className='first-row'>
                    <h1>Specials</h1>
                    <button>Online Menu</button>
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
            <section id='testimonials'>
                <div className='section-wrapper'>
                    <h3>Testimonials</h3>
                    <div className='testimonial_row'>
                        <Card_Testimonial
                            src={review1}
                            FirstName="Jiro"
                            stars={4}
                            Review_Text="This lemon dessert was amazing!"
                        />
                        <Card_Testimonial
                            src={review2}
                            FirstName="Sophia"
                            stars={5}
                            Review_Text="The lamb skewers were incredibly tender and flavorful"
                        />
                        <Card_Testimonial
                            src={review3}
                            FirstName="Elias"
                            stars={5}
                            Review_Text="The service was execllent"
                        />
                        <Card_Testimonial
                            src={review4}
                            FirstName="Fatima"
                            stars={4}
                            Review_Text="Loved the mezze platter, perfect for sharing!"
                        />
                        {/* <div className='test_card'>
                            <svg 
                                height='50'
                                width='50'
                                viewBox='0 0 50 50'>
                                    <circle cx={25} cy={25} r={25} fill='#888'></circle>
                                </svg>
                            <div className='stars'>⭐️⭐️⭐️⭐️⭐️</div>
                            <h5>FirstName LastName</h5>
                            <p>This is the review text that talks about how wonderful the restaurant is</p>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="section-wrapper">
                    <div className='column1'>
                        <h2>Little Lemon</h2>
                        <h5>Chicago</h5>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div className='column2'>
                        <img src={aboutphoto}></img>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Main;