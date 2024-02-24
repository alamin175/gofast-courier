import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../../AuthContext/AuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const UpdateParcel = () => {
  const { user, error, setError } = useContext(UserContext);
  const { id } = useParams();
  const axiossecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const { data: parcel = [], refetch } = useQuery({
    // when load data from specific id , the dynamic id/params will need for usequery to load data everytime
    queryKey: ["parcel", id],
    queryFn: async () => {
      const res = await axiossecure.get(`/myParcels/${id}`);
      return res.data;
    },
  });

  //   console.log(parcel);
  const currentDate = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  // set the locale to 'en-GB' (English - United Kingdom) because it uses the day/month/year format:
  const formattedDate = currentDate.toLocaleDateString("en-GB", options);

  const weight = watch("weight");

  const onSubmit = async (value) => {
    const {
      collection,
      email,
      parcelType,
      weight,
      receiverName,
      number,
      address,
      parcelCost,
    } = value;
    const isValid = await trigger();

    if (isValid) {
      const parcelDetails = {
        email: email,
        parcelType: parcelType,
        parcelWeight: weight,
        receiverName: receiverName,
        receiverNumber: number,
        collectionAmount: collection,
        receiverAddress: address,
        parcelCost: parcelCost,
        status: "pending",
        date: formattedDate,
      };

      await axiossecure.patch(`myParcels/${id}`, parcelDetails).then((res) => {
        // console.log(res);
        if (res.data.modifiedCount === 1) {
          navigate("/dashboard/myParcels");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Parcel Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div className="md:-mt-16 w-full">
      <SectionTitle title="Update Your Parcel"></SectionTitle>
      <div className="bg-base-200 lg:p-10 p-4 shadow-md shadow-red-700 lg:mx-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="text"
                readOnly
                value={user?.email}
                placeholder="your Email"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.email && (
                <span className="text-error text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* parcelType */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Parcel Type</span>
              </label>
              <input
                {...register("parcelType", {
                  required: "Parcel Type is required",
                })}
                type="text"
                defaultValue={parcel.parcelType}
                placeholder="Parcel Type . Ex- Smart Watch"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.parcelType && (
                <span className="text-error text-sm">
                  {errors.parcelType.message}
                </span>
              )}
            </div>
            {/* weight */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Parcel Weight</span>
              </label>
              <input
                {...register("weight", {
                  required: "Parcel Weight is required",
                })}
                defaultValue={parcel.parcelWeight}
                type="number"
                placeholder="Parcel Weight . Ex-1(kg)"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.weight && (
                <span className="text-error text-sm">
                  {errors.weight.message}
                </span>
              )}
            </div>
            {/* receiverName */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Receiver's Name</span>
              </label>
              <input
                {...register("receiverName", {
                  required: "Receiver's Name is required",
                })}
                defaultValue={parcel.receiverName}
                type="text"
                placeholder="Receiver Name"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.receiverName && (
                <span className="text-error text-sm">
                  {errors.receiverName.message}
                </span>
              )}
            </div>
            {/* number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Receiver's Phone Number</span>
              </label>
              <input
                {...register("number", {
                  required: "Receiver's Phone Number is required",
                })}
                defaultValue={parcel.receiverNumber}
                type="text"
                placeholder="Receiver's Number"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.number && (
                <span className="text-error text-sm">
                  {errors.number.message}
                </span>
              )}
            </div>
            {/*collection amount*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Collection Amount From Customer
                </span>
              </label>
              <input
                {...register("collection", {
                  required: "Collection Amount is required",
                })}
                defaultValue={parcel.collectionAmount}
                type="number"
                placeholder="Collection Amount"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.collection && (
                <span className="text-error text-sm">
                  {errors.collection.message}
                </span>
              )}
            </div>
            {/* address */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Delivery Address</span>
              </label>
              <textarea
                {...register("address", {
                  required: "Delivery Address is required",
                })}
                defaultValue={parcel.receiverAddress}
                type="text"
                placeholder="Parcel Delivery Address"
                className="textarea textarea-bordered   focus:outline-red-600 border-red-600 focus:border-red-600  md:w-[280px]"
              />
              {errors.address && (
                <span className="text-error text-sm">
                  {errors.address.message}
                </span>
              )}
            </div>
            {/* parcelCost */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Parcel Cost</span>
              </label>
              <input
                {...register("parcelCost", { required: "Name is required" })}
                type="text"
                readOnly
                value={
                  weight == null || weight == 0
                    ? 0
                    : weight == 1
                    ? 50
                    : weight == 2
                    ? 100
                    : 150
                }
                placeholder="your Name"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.name && (
                <span className="text-error text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <input
              className="btn w-1/2 hover:bg-red-600 bg-red-500 text-white font-bold text-xl"
              type="submit"
              value="Update Parcel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateParcel;
