import "./signup.scss";

const SignUp = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignUp;
