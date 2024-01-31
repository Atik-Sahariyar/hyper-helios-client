import './login.scss';
const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder='Enter username'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='Enter password' />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
