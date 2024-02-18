import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../AuthContext/AuthContext";

const Register = () => {
  const { createUser, error, setError } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const { email, password } = value;

    createUser(email, password)
      .then((data) => {
        console.log(data);
        setError("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero bg-gradient-to-r from-red-500 to-white min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:mx-16 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              className="w-2/3 mx-auto"
              src="https://i.ibb.co/By2dW58/Confirmed-bro.png"
              alt=""
            />
          </div>

          {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="your Name"
                  className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
                />
                {errors.name && (
                  <span className="text-error text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
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
              </div>

              <p className="text-error">{error} </p>

              <input
                className="btn hover:bg-red-600 bg-red-500 text-white font-bold text-xl"
                type="submit"
                value="Register"
              />

              <label className="label">
                <p className="label-text-alt text-lg ">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#ff0000]  link-hover">
                    Login
                  </Link>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
