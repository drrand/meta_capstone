import logo from './images/Logo.svg';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <img src={logo} alt="Little Lemon Logo"></img>
            <div>
                <p>Navigation</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <p>Social Media</p>
                <ul>
                    <li>Social Site 1</li>
                    <li>Social Site 2</li>
                    <li>Social Site 3</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;