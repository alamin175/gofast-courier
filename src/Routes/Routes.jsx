import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ParcelBook from "../Pages/Dashboard/Merchant/ParcelBook";
import MyParcels from "../Pages/Dashboard/Merchant/MyParcels";
import MyProfile from "../Pages/Dashboard/Merchant/MyProfile";
import UpdateParcel from "../Pages/Dashboard/Merchant/UpdateParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "parcelBook",
        element: <ParcelBook></ParcelBook>,
      },
      {
        path: "myParcels",
        element: <MyParcels></MyParcels>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "updateParcel/:id",
        element: <UpdateParcel></UpdateParcel>,
      },
    ],
  },
]);
