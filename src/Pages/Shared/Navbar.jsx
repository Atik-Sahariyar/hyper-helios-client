
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.scss";
import useInterceptor from "../../Hooks/useInterceptor";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../../Providers/authProvider";

const Navbar = () => {
  const axios = useInterceptor();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleLogout = async() => {
    const res = await axios.post("/dj-rest-auth/logout/");
    if(res.data){
      Cookies.remove('accessToken')
      navigate("/login")
    }
  }

  return (
    <nav className="navbar">
      <img src="https://i.ibb.co/JnGVSFP/logo.png" alt="logo"  className="logo"/>
      <div className={`nav-links`}>
        <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active-link' : ''}`} >
          Profile
        </Link>
        <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active-link' : ''}`}>
          Login
        </Link>
        <Link to="/signup" className={`nav-link ${location.pathname === '/signup' ? 'active-link' : ''}`}>
          Signup
        </Link>
      </div>
      <div>
        {
          user && <button onClick={handleLogout} className="logout">Logout</button> 
        }
      </div>

    </nav>
  );
};

export default Navbar;
