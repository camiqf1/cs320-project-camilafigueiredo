import { Link } from "react-router-dom";
import './Navbar.css'; // you'll style it here
import controllerIcon from '../assets/controller1.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={controllerIcon} alt="GameBoxx logo" />
                <h1 className="pixel-title">GameBoxx</h1>

            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/games">Game List</Link>
                <Link to="/add-game">Add Game</Link>
                <Link to="/page2">Page 2</Link>
                <Link to="/error-test">Error Test</Link>
            </div>
        </nav>
    );
};

export default Navbar;

