import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import useInterceptor from "../../Hooks/useInterceptor";


const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const axios = useInterceptor();
  const navigate = useNavigate();

  const handleLogin  = async(data) => {
      const res = await axios.post("/dj-rest-auth/login/", data);
      console.log(res);
      if(res){
        Cookies.set('accessToken', res?.data?.access)
        navigate("/profile")
        reset();
      }
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(handleLogin)} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            {...register("email")}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter password"
            required
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
