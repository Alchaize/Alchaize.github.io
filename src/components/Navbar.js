import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav id="navbar" className="nav">
            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;