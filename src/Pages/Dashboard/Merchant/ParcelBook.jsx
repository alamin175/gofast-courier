import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../AuthContext/AuthContext";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ParcelBook = () => {
  const { user, error, setError } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const weight = watch("weight");
  const onSubmit = (value) => {
    const {
      name,
      email,
      parcelType,
      weight,
      receiverName,
      number,
      address,
      parcelCost,
    } = value;
    console.log(value);
    const parcelDetails = {
      name: name,
      email: email,
      parcelType: parcelType,
      parcelWeight: weight,
      receiverName: receiverName,
      receiverNumber: number,
      receiverAddress: address,
      parcelCost: parcelCost,
    };
  };
  return (
    <div className="md:-mt-16 w-full">
      <SectionTitle title="Book A Percel"></SectionTitle>
      <div className="bg-base-200 lg:p-10 p-4 shadow-md shadow-red-700 lg:mx-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                readOnly
                value={user?.displayName}
                placeholder="your Name"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.name && (
                <span className="text-error text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
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
                type="text"
                placeholder="Receiver's Number"
                className="input input-bordered focus:outline-red-600 border-red-600 focus:border-red-600 w-full max-w-xs"
              />
              {errors.receiverNumber && (
                <span className="text-error text-sm">
                  {errors.receiverNumber.message}
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
                type="text"
                placeholder="Parcel Delivery Address"
                className="textarea textarea-bordered   focus:outline-red-600 border-red-600 focus:border-red-600  md:w-[280px]"
              />
              {errors.delivery && (
                <span className="text-error text-sm">
                  {errors.delivery.message}
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
              value="Book Parcel"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParcelBook;
