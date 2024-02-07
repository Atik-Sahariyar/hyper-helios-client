
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Navbar = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleLogout = async() => {
    const res = await axiosPublic.post("/dj-rest-auth/logout/");
    if(res.data){
      navigate("/")
    }
  }

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
          Signup
        </Link>
      </div>
      <div>
        <button onClick={handleLogout} className="logout">Logout</button>
      </div>

    </nav>
  );
};

export default Navbar;
