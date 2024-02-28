import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { UserContext } from "../../../AuthContext/AuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ParcelBook = () => {
  const { user, error, setError } = useContext(UserContext);
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // const parcelCost = watch("parcelCost");
  // console.log(parcelCost);

  const currentDate = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  // set the locale to 'en-GB' (English - United Kingdom) because it uses the day/month/year format:
  const formattedDate = currentDate.toLocaleDateString("en-GB", options);

  const weightValue =
    watch("weight"); /* watch from react-hook-form return a string*/
  const calculateParcelCost = (weight) => {
    const numWeight = parseInt(weight);
    if (numWeight == null || numWeight <= 0) {
      return 0;
    } else if (numWeight === 1) {
      return 50;
    } else if (numWeight === 2) {
      return 100;
    } else if (numWeight >= 3) {
      return 150;
    } else {
      return 0;
    }
    // return 0;
  };

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
    console.log(value);

    const parcelCosting = calculateParcelCost(weight);
    setValue("parcelCost", parcelCosting);
    const parcelDetails = {
      name: user?.displayName,
      email: email,
      parcelType: parcelType,
      parcelWeight: weight,
      receiverName: receiverName,
      receiverNumber: number,
      collectionAmount: collection,
      receiverAddress: address,
      parcelCost: parcelCosting,
      status: "pending",
      date: formattedDate,
    };
    await axiosSecure.post("/booking", parcelDetails).then((res) => {
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Parcel Booking Successfullly",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="md:-mt-16 w-full mb-10">
      <SectionTitle title="Book A Percel"></SectionTitle>
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
                type="number"
                value={calculateParcelCost(weightValue)}
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
