import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
   
    const { username, password1, password2, email } = data;
    const formData = { username, password1, password2, email };

    try {
      const response = await axiosPublic.post("/dj-rest-auth/registration/", formData);
      if(response){
      reset();
      navigate("/profile")
      }
      
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };


  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register("username")}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password1")}
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            {...register("password2")}
            placeholder="Confirm password"
          />
        </div>
      
        <button type="submit" className="signup-button">
          Signup
        </button>
        <span className="old-user">
          <p>
            Already have an account ? Please{" "}
            <Link className="login-link" to="/login">
              Login
            </Link>
          </p>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
