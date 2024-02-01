import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <span>
          <p className="new-user">
            Are you new? please <Link className="signup-link" to="/signup"> signup </Link>{" "}
          </p>
        </span>
      </form>
    </div>
  );
};

export default Login;
