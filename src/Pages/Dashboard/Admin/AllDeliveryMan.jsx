import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FcRating } from "react-icons/fc";

const AllDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();

  const { data: deliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/topRider");
      return res.data;
    },
  });

  return (
    <div className="-mt-16 mb-10 ">
      <SectionTitle title="All Delivery Man"> </SectionTitle>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {deliveryMan.map((rider, index) => (
              <tr key={rider._id}>
                <td>{index + 1}</td>
                <td>{rider.name}</td>
                <td>{rider.number}</td>
                {/* <td>{rider.rating}</td> */}
                <td className="flex gap-1 items-center">
                  {rider.rating} <FcRating></FcRating>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveryMan;
