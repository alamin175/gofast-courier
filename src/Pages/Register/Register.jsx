import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../AuthContext/AuthContext";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, error, setError, updateUserProfile } =
    useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const role = watch("role");
  // console.log(role);
  const onSubmit = (value) => {
    const { role, name, email, password } = value;
    const userData = {
      name: name,
      email: email,
      role: role,
    };
    createUser(email, password)
      .then((data) => {
        console.log(data.user);
        updateUserProfile(name, null)
          .then(async () => {
            const res = await axiosPublic.post("/user", userData);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfullly",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
            console.log(res);
            setError("");
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Helmet>
        <title>Register - GoFast</title>
      </Helmet>
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
                  <span className="label-text text-2xl">Register As</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("role", { required: "Role is required" })}
                  className="select focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
                >
                  <option value="default" disabled>
                    Select A Role
                  </option>
                  <option value="merchant"> Merchant</option>
                  <option value="deliveryMan">Delivery Man</option>
                </select>
                {errors.role && (
                  <span className="text-error text-sm">
                    {errors.role.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    maxLength: {
                      value: 23,
                      message: "Name cannot be 23 or more",
                    },
                  })}
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
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
