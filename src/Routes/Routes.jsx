import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard';

import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import ParcelBook from '../Pages/Dashboard/Merchant/ParcelBook';
import MyParcels from '../Pages/Dashboard/Merchant/MyParcels';
import MyProfile from '../Pages/Dashboard/Merchant/MyProfile';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers';
import AllDeliveryMan from '../Pages/Dashboard/Admin/AllDeliveryMan';
import AllParcels from '../Pages/Dashboard/Admin/AllParcels';
import UpdateParcel from '../Pages/Dashboard/Merchant/UpdateParcel';
import AdminRoute from './AdminRoute';
import Gallery from '../Pages/Home/Gallery/Gallery';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: 'parcelBook',
				element: <ParcelBook />,
			},
			{
				path: 'myParcels',
				element: <MyParcels />,
			},
			{
				path: 'myProfile',
				element: <MyProfile />,
			},
			{
				path: 'updateParcel/:id',
				element: <UpdateParcel />,
			},
			{
				path: 'allParcels',
				element: (
					<AdminRoute>
						<AllParcels />
					</AdminRoute>
				),
			},
			{
				path: 'allUsers',
				element: (
					<AdminRoute>
						<AllUsers />
					</AdminRoute>
				),
			},
			{
				path: 'allDeliveryMan',
				element: (
					<AdminRoute>
						<AllDeliveryMan />
					</AdminRoute>
				),
			},
		],
	},
]);
