import { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "../../../AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);
  const handleLogout = () => {
    logOut().then(() => {
      // user logout
    });
  };
  const navOption = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Dashboard</a>
      </li>
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
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] outline outline-[#ff0000] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
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
