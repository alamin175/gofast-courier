import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../AuthContext/AuthContext";

const Login = () => {
  const { signInUser, error, setError, googleSignIn } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const { email, password } = value;

    signInUser(email, password)
      .then((data) => {
        console.log(data);
        setError("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User login successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero bg-gradient-to-r from-white to-red-500 min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:mx-16 lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="w-2/3 mx-auto"
              src="https://i.ibb.co/HKTzkhc/Login-amico.png"
              alt=""
            />
          </div>

          {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="text"
                  placeholder="your email"
                  className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
                />
                {errors.email && (
                  <span className="text-error text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is Required",
                  })}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
                />
                {errors.password && (
                  <span className="text-error text-sm">
                    {errors.password.message}
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alttext-lg link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <p className="text-error">{error} </p>

              <input
                className="btn hover:bg-red-600 bg-red-500 text-white font-bold text-xl"
                type="submit"
                value="Login"
              />

              <label className="label">
                <p className="label-text-alt text-lg ">
                  Dont have an account?{" "}
                  <Link to="/register" className="text-[#ff0000]  link-hover">
                    Register
                  </Link>
                </p>
              </label>
              <div className="divider">OR</div>
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn outline w-full bg-transparent outline-[#ff0000] "
                >
                  <FcGoogle className="text-2xl"></FcGoogle>
                  Continue With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
