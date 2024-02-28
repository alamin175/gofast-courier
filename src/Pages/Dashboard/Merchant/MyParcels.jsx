import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { UserContext } from "../../../AuthContext/AuthContext";

const MyParcels = () => {
  const { user } = useContext(UserContext);
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get(`myParcels?email=${user.email}`);
      return res.data;
    },
  });
  // console.log(parcels);
  return (
    <div className="md:-mt-16 w-full mb-10">
      <SectionTitle title="My Parcels"></SectionTitle>
      <div className="overflow-x-auto -mt-6 mx-auto ml-1 mr-1">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Parcel Type</th>
              <th>Customer's Number</th>
              <th>Delivery Address</th>
              <th>Delivery man's Id</th>
              <th>Booking Date</th>
              <th>Status</th>
              {/* <th>Review</th> */}
              <th>Update</th>
              <th>COD</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => {
              return (
                <tr style={{ fontSize: 14 }} key={parcel._id}>
                  {console.log(parcel)}
                  <td className="text-lg">{index + 1}</td>
                  <td>{parcel.receiverName}</td>
                  <td>{parcel.parcelType}</td>
                  <td>{parcel.receiverNumber}</td>
                  <td>{parcel.receiverAddress}</td>
                  <td>
                    {parcel.riderId ? parcel.riderId : "Rider not assigned"}
                  </td>
                  <td>{parcel.date}</td>
                  <td
                    className={
                      parcel.status === "pending"
                        ? "text-red-600"
                        : "bg-green-300 rounded"
                    }
                  >
                    {parcel.status}
                  </td>
                  {/* <td>
                    <button
                      className={`btn btn-xs btn-primary ${
                        parcel.status === "delivered"
                          ? "enabled"
                          : "btn-disabled"
                      }`}
                    >
                      <MdRateReview className="text-white text-lg"></MdRateReview>
                    </button>
                  </td> */}
                  <td>
                    {parcel.status === "pending" ? (
                      <Link to={`/dashboard/updateParcel/${parcel._id}`}>
                        <button
                          title="Update Parcel"
                          className="text-2xl p-1 text-black px-3 hover:bg-orange-300"
                        >
                          <FaRegEdit></FaRegEdit>
                        </button>
                      </Link>
                    ) : (
                      <button
                        title="Update Parcel"
                        className="text-2xl p-1 text-black px-3 hover:bg-orange-300 btn-disabled"
                      >
                        <FaRegEdit></FaRegEdit>
                      </button>
                    )}
                  </td>
                  <td>${parcel.collectionAmount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
