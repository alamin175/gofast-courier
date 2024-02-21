import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../AuthContext/AuthContext";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useContext(UserContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then(async (result) => {
      console.log(result);
      const userData = {
        name: result.user.displayName,
        email: result.user.email,
        role: "merchant",
      };
      const res = await axiosPublic.post("/user", userData);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });
  };
  return (
    <div>
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
  );
};

export default SocialLogin;
const handleGoogleSignIn = () => {
  googleSignIn().then((data) => {});
};
