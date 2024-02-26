import { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "../../../AuthContext/AuthContext";
import useUserData from "../../../Hooks/useUserData";

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);
  const [userData, refetch] = useUserData();

  const handleLogout = () => {
    logOut().then(() => {
      // user logout
    });
  };
  const navOption = (
    <>
      <Link to="/">
        <li className="mr-5">Home</li>
      </Link>

      <Link to="/dashboard/myProfile">
        <li>Dashboard</li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <Link className="font-bold text-3xl md:text-4xl">
            <h1>
              Go<span className="text-[#ff0000]">Fast</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption} </ul>
        </div>
        <div className="navbar-end">
          <IoIosNotifications className="text-4xl mx-4"></IoIosNotifications>
          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 ring-2 ring-[#ff0000] rounded-full">
                    {userData.image ? (
                      <img alt="User Avatar" src={userData.image} />
                    ) : (
                      <FaRegUser className="text-2xl mx-auto h-full"></FaRegUser>
                    )}
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] outline outline-[#ff0000] p-2 shadow bg-base-100 rounded-box w-52 lg:w-64"
                >
                  <li className="read-only pointer-events-none ">
                    <h4 className="text-xl">Name: {user.displayName}</h4>
                  </li>

                  <li className="read-only pointer-events-none">
                    <a>Email: {user.email}</a>
                  </li>
                  <li>
                    <a
                      className="btn m-2 w-1/2 mx-auto bg-[#ff0000] text-white font-semibold hover:bg-red-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <Link to="/login">
                <button className="btn bg-[#ff0000] text-white font-semibold hover:bg-red-600">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
