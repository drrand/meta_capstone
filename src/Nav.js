import { Link } from 'react-router';
import './Nav.css';

const Nav = () => {
    return(
        <nav>
            <ul>
                <li><Link className="navEl" to="/">Home</Link></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><Link className="navEl" to="/Reservations">Reservations</Link></li>
                <li><Link className="navEl" to="/OrderOnline">Order Online</Link></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;