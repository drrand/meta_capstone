import Nav from "./Nav";
import logo from './images/Logo.svg'
import './Header.css';

const Header = () => {
    return(
        <header>
            <img src={logo} alt="Little Lemon Logo"></img>
            <Nav></Nav>
        </header>
    )
}

export default Header;