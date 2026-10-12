import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className="site-header">
            <Link to="/" className="logo">
                DEV<span>@</span>Deakin
            </Link>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/post">Post</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
        </header>
    );
}

export default NavBar;
