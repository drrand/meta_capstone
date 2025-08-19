import review1 from './images/review1.jpg';
import review2 from './images/sophia.jpg';
import review3 from './images/Elias.jpg';
import review4 from './images/fatima.jpg';
import CardTestimonial from './CardTestimonial';

const Testimonials = () => {
    return (
       <section id='testimonials'>
                <div className='section-wrapper'>
                    <h1>Testimonials</h1>
                    <div className='testimonial_row'>
                        <CardTestimonial
                            src={review1}
                            FirstName="Jiro"
                            stars={4}
                            Review_Text="This lemon dessert was amazing!"
                        />
                        <CardTestimonial
                            src={review2}
                            FirstName="Sophia"
                            stars={5}
                            Review_Text="The lamb skewers were incredibly tender and flavorful"
                        />
                        <CardTestimonial
                            src={review3}
                            FirstName="Elias"
                            stars={5}
                            Review_Text="The service was execllent"
                        />
                        <CardTestimonial
                            src={review4}
                            FirstName="Fatima"
                            stars={4}
                            Review_Text="Loved the mezze platter, perfect for sharing!"
                        />
                    </div>
                </div>
            </section>
    )
}

export default Testimonials;