import heroImg from './images/heroChef.png';
import './Main.css'

const Main = () => {
    return(
        <main>
            <section class='hero'>
                <div class='column1'>
                    <div class='text-section'>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button>Reserve a Table</button>
                </div>
                <div>
                    <img src={heroImg}></img>
                </div>
            </section>
            <section class='Specials'>
                <div class='first-row'>
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </div>
                <div class='second-row'>
                    <div class='card'>
                        <img></img>
                        <div class='card content'>
                            <p>Greek Salad</p>
                            <p>$12.99</p>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <p>Order a delivery</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Main;