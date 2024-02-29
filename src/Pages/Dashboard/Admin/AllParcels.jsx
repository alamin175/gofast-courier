import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../AuthContext/AuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllParcels = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedParcelId, setSelectedParcelId] = useState(null);
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["percels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels");
      return res.data;
    },
  });

  const { data: deliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/topRider");
      return res.data;
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (value) => {
    const { rider } = value;
    const [id, name] = rider.split("|");
    const updateData = {
      riderId: id,
      riderName: name,
      parcelId: selectedParcelId,
    };
    const res = await axiosSecure.patch("/assignRider", updateData);
    console.log(res);
    if (res.data.modifiedCount === 1) {
      {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Rider Assigned Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/allParcels");
        refetch();

        //close the modal after update
        const modal = document.getElementById("my_modal_1");
        if (modal) {
          modal.close();
        }
      }
    }
  };

  const handleParcelIdModal = (parcelId) => {
    document.getElementById("my_modal_1").showModal();
    setSelectedParcelId(parcelId);
    console.log("id of parcel", selectedParcelId);
  };

  return (
    <div className="-mt-16 mb-10">
      <Helmet>
        <title>All Parcels - GoFast</title>
      </Helmet>
      <SectionTitle title="All Parcels"> </SectionTitle>

      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Booking Date</th>
              <th>Total Collection</th>
              <th>Status</th>
              <th>Manage</th>
              <th>Rider ID</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.name}</td>
                <td>{parcel.date}</td>
                <td className="flex justify-end items-center">
                  <TbCurrencyTaka></TbCurrencyTaka>
                  {parcel.collectionAmount}
                </td>
                <td
                  className={
                    parcel.status === "pending"
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {parcel.status}
                </td>
                <td
                  className="btn text-2xl flex justify-center bg-transparent border-none"
                  title="Manage Parcel"
                  // onClick={() =>
                  //   document.getElementById("my_modal_1").showModal()
                  // }
                  onClick={() => handleParcelIdModal(parcel._id)}
                >
                  <MdOutlineManageAccounts></MdOutlineManageAccounts>
                </td>
                <td className={parcel.riderId ? "" : "text-red-600"}>
                  {parcel.riderId ? parcel.riderId : "Rider not assigned"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box text-center">
            <div>
              <h3 className="font-bold text-lg m-3">Assign Rider!</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <select
                  {...register("rider", { required: "Rider not Selected" })}
                  defaultValue=""
                  className="select select-bordered w-full max-w-xs flex mx-auto m-4"
                >
                  <option value="" disabled>
                    Select A Rider
                  </option>
                  {deliveryMan.map((man) => (
                    <option key={man._id} value={`${man._id}|${man.name}`}>
                      {man.name}
                    </option>
                  ))}
                </select>
                {errors.rider && (
                  <span className="block text-red-600 text-left">
                    {errors.rider.message}
                  </span>
                )}
                <input
                  className="btn hover:bg-red-600 bg-red-500 text-white text-lg"
                  type="submit"
                  value="Assign Rider"
                />
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AllParcels;
