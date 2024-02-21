import { NavLink, Outlet } from "react-router-dom";
// import "./dashboard.css";

const Dashboard = () => {
  // TODO: user type will be update
  const merchant = true;
  const deliveryMan = false;
  const admin = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer"
          className="btn btn-primary lg:hidden drawer-button"
        >
          Open drawer
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#1e1b3b] text-base-content">
          {/* Sidebar content here */}
          {admin ? (
            <>
              <li>
                <NavLink>
                  <a>All Users</a>
                </NavLink>
              </li>
            </>
          ) : deliveryMan ? (
            <>
              <li>
                <NavLink>
                  <a>My Delivery</a>
                </NavLink>
              </li>
            </>
          ) : (
            <div className="text-2xl text-white">
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
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
