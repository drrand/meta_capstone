import Button from './Button';
import heroImg from './images/heroChef.png';

const Hero = () => {
    return (
        <section className='hero'>
                    <div className='column1'>
                        <div className='text-section'>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <Button text="Reserve a Table" />
                    </div>
                    <div className='column2'>
                        <img src={heroImg} alt="Image of chef presenting food"></img>
                    </div>
            </section>
    )
}

export default Hero;