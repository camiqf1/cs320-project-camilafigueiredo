import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                {/* Using "span" here to add a separator between the links.
                get rid of this later to add CSS formatting*/}
                <span> | </span>
                <Link to="/page2"> Page 2</Link>
            </div>
        </nav>
    );
}

export default Navbar;