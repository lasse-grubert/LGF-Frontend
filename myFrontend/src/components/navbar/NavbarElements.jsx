import {Link} from "react-router-dom"
import Logo from "../../assets/myLogo.png";

export function NavbarElements() {
    return(
        <>
            <li><Link to="/" className="navbar-logo-link">
                <img
                    src={Logo}
                    alt="Logo"
                    className="navbar-logo"
                />
            </Link></li>
            <li><Link to="/worktime-calculator">Worktime Calculator</Link></li>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </>
    )
}