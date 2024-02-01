
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        Logo
      </a>
      <div className={`nav-links`}>
        <Link to="/" clLinkssName="nav-link">
          Home
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          SignUp
        </Link>
      </div>
      <div>
        
      </div>

    </nav>
  );
};

export default Navbar;
