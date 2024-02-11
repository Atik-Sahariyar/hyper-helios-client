
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import useInterceptor from "../../Hooks/useInterceptor";
import Cookies from "js-cookie";

const Navbar = () => {
  const axios = useInterceptor();
  const navigate = useNavigate();

  const handleLogout = async() => {
    const res = await axios.post("/dj-rest-auth/logout/");
    if(res.data){
      Cookies.remove('accessToken')
      navigate("/")
    }
  }

  return (
    <nav className="navbar">
      <img src="https://i.ibb.co/JnGVSFP/logo.png" alt="logo"  className="logo"/>
      <div className={`nav-links`}>
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
