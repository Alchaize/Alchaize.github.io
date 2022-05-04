import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav id="navbar" className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/#welcome-section">About</Link>
                </li>
                <li>
                    <Link to="/#projects">Work</Link>
                </li>
                <li>
                    <Link to="/#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;