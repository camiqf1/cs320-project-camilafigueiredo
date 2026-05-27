import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>GAMEBOXX</h1>
            </div>

            <div className="navbar-links">
                <Link to="/">HOME</Link>
                <Link to="/games">GAME LIST</Link>
                <Link to="/add-game">ADD GAME</Link>
                <Link to="/page2">PROFILE</Link>
            </div>

            <div className="navbar-status">
                <span className="status-dot"></span>
                ONLINE
            </div>
        </nav>
    );
};

export default Navbar;
