import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit, FaRegUser, FaRegUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { UserContext } from "../../../AuthContext/AuthContext";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUserData from "../../../Hooks/useUserData";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MyProfile = () => {
  const { user } = useContext(UserContext);
  const [userData, refetch] = useUserData();
  // console.log(userData);

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,

    reset,

    formState: { errors },
  } = useForm();

  const image_hosting_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
  const imageUpload = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;

  const onSubmit = async (data, event) => {
    // const buttonName = event.nativeEvent.submitter.name;

    const imageFile = { image: data.image[0] };
    console.log(imageFile);

    const res = await axiosPublic.post(imageUpload, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res?.data.success) {
      const updateData = {
        name: data.name,
        image: res?.data.data.display_url,
      };

      const updateProfile = await axiosSecure.patch(
        `/updateProfile?email=${user?.email}`,
        updateData
      );
      // console.log(updateProfile.data);
      if (updateProfile.data.modifiedCount === 1) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Profile Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        refetch();
      }
    }

    // console.log(res);
  };

  return (
    <div className="md:-mt-16  w-full mb-10">
      <SectionTitle title="Your Profile"></SectionTitle>
      <div className=" items-center gap-4 border  shadow-lg shadow-red-500 border-[#ff0000] mx-auto p-10 w-1/2">
        <div className="avatar flex justify-center items-center m-3">
          <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            {userData.image ? (
              <img src={userData.image} alt="User Avatar" />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-400">
                <FaRegUser className="text-8xl" />
              </div>
            )}
          </div>
        </div>

        <form
          className="flex flex-col justify-center items-center place-items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="form-control w-full mb-6 max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">
                  Change Your Photo
                </span>
              </div>
              <input
                {...register("image", { required: "No image selected" })}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              {errors.image && (
                <span className="text-red-500">{errors.image.message}</span>
              )}
            </label>
          </div>
          <div className="flex gap-6 items-center">
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-4">
                  Change Your Profile Name!
                </h3>
                <label className="input input-bordered flex items-center gap-2">
                  Name:-
                  <input
                    {...register("name")}
                    type="text"
                    className="grow"
                    placeholder="Your Name"
                  />
                </label>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* <div className="flex justify-center items-center gap-2">
          <div className="text-xl font-medium">
            <h1>Name</h1>
            <h1> Email</h1>
            <h1>User Type</h1>
          </div>
          <div className="text-xl font-medium">
            <div className="flex">
              <h1 className="mx-4 ">{user?.displayName}</h1>
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <FaRegEdit className="text-3xl text-red-600"></FaRegEdit>
              </button>
            </div>
            <h1 className="mx-4"> {user?.email}</h1>
            <h1 className="mx-4 uppercase">{userData.role}</h1>
          </div>
        </div> */}
          <div className=" justify-center items-center gap-2">
            {/* <form onSubmit={handleUpdateProfile}> */}
            <table className="text-xl font-medium">
              <tbody>
                <tr>
                  <td>Name</td>

                  <td>
                    <div className="flex items-center">
                      <span className="mx-4">{userData?.name}</span>
                      <a
                        className="cursor-pointer"
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                      >
                        <FaRegEdit className="text-3xl text-red-600"></FaRegEdit>
                      </a>
                    </div>
                    {errors.name && (
                      <span className="text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Email</td>
                  <td>
                    <span className="mx-4">{user?.email}</span>
                  </td>
                </tr>
                <tr>
                  <td>User Type</td>
                  <td>
                    <span className="mx-4 uppercase">{userData.role}</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center mt-6">
              <input
                type="submit"
                value="Update Profile"
                className="btn  hover:bg-red-600 bg-red-500 text-white  "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
