import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { GiHamburgerMenu } from "react-icons/gi";
// import "./dashboard.css";

const Dashboard = () => {
  // TODO: user type will be update
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);

  // TODO
  const merchant = true;
  const deliveryMan = false;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {/* <Outlet></Outlet> */}
        <label
          htmlFor="my-drawer"
          className="flex m-2 text-4xl lg:hidden drawer-button"
        >
          <GiHamburgerMenu></GiHamburgerMenu>
        </label>
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-red-300 text-base-content ">
          {/* Sidebar content here */}
          {isAdmin ? (
            <div className="text-2xl">
              <li>
                <NavLink to="/dashboard/allParcels">
                  <a>All Parcels</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <a>All Users</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allDeliveryMan">
                  <a>All Delivery Man</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myProfile">
                  <a>My Profile</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <a>Home</a>
                </NavLink>
              </li>
            </div>
          ) : merchant ? (
            <div className="text-2xl">
              <li>
                <NavLink
                  activeclassname="active-link"
                  to="/dashboard/parcelBook"
                >
                  <button>Book A Parcel</button>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeclassname="active-link"
                  to="/dashboard/myParcels"
                >
                  My Parcels
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myProfile"
                  activeclassname="active-link"
                >
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeclassname="active-link">
                  Home
                </NavLink>
              </li>
            </div>
          ) : (
            <>
              <li>
                <NavLink>
                  <a>My Delivery</a>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
