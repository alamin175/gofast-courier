import { useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../AuthContext/AuthContext";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { user, signInUser, error, setError, resetPassword } =
    useContext(UserContext);
  const emailRef = useRef();

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

  const forgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please type your email address");
      return;
    }
    resetPassword(email)
      .then((data) => {
        alert("Please check your email for reset password");
        const modal = document.getElementById("my_modal_1");
        modal.close();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Helmet>
        <title>Login - GoFast</title>
      </Helmet>
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
                    <a
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      href="#"
                      className="label-text-alttext-lg link link-hover"
                    >
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
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </form>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Type your email!</h3>
          <p className="py-4">
            <input
              ref={emailRef}
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </p>
          <input
            onClick={forgetPassword}
            className="btn hover:bg-red-600 bg-red-500 text-white font-bold text-xl"
            type="submit"
            value="Submit"
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Login;
