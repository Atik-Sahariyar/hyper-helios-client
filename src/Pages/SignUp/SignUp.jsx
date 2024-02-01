import { Link } from "react-router-dom";
import "./signup.scss";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, reset} = useForm()
   
  const onSubmit = async(data) => {
    const email = data.email;
    const userName = data.username;
    const password = data.password;

    const userInfo = { email, userName, password};
    console.log(userInfo)
    reset()
  }
  
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text"  {...register("username")} placeholder="Enter username"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" {...register('email')} placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" {...register('password')} placeholder="Enter password"/>
        </div>
        <button type="submit" className="signup-button">
          Signup
        </button>
        <span className="old-user">
          <p>
            Already have an account ? Please <Link className="login-link" to="/login">Login</Link>
          </p>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
