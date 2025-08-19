import { Link, useLocation } from 'react-router';
import './Nav.css';

const Nav = () => {

    const location = useLocation();

    return (
        <nav>
            <ul>
                <li>
                    <Link
                    className={`navEl ${location.pathname === '/' ? 'currentPage' : ''}`}
                    to="/">Home</Link>
                </li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li>
                    <Link className={`navEl ${location.pathname === '/Reservations' ? 'currentPage' : ''}`} to="/Reservations">Reservations</Link></li>
                <li><a className="navEl" to="/OrderOnline">Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;