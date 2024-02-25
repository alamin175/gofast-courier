import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { UserContext } from "../../../AuthContext/AuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const MyProfile = () => {
  const { user } = useContext(UserContext);

  const axiosSecure = useAxiosSecure();
  const { data: userData = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`user/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="md:-mt-16  w-full">
      <SectionTitle title="Your Profile"></SectionTitle>
      <div className="flex flex-col items-center gap-4 border  shadow-lg shadow-red-500 border-[#ff0000] mx-auto p-10 w-1/2">
        <div className="avatar">
          <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <label className="form-control w-full mb-6 max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">
                Change Your Photo
              </span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
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
                <input type="text" className="grow" placeholder="Your Name" />
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
        <div className="flex justify-center items-center gap-2">
          <table className="text-xl font-medium">
            <tbody>
              <tr>
                <td>Name</td>

                <td>
                  <div className="flex items-center">
                    <span className="mx-4">{user?.displayName}</span>
                    <button
                      className=""
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      <FaRegEdit className="text-3xl text-red-600"></FaRegEdit>
                    </button>
                  </div>
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
        </div>

        <div>
          <button className="btn hover:bg-red-600 bg-red-500 text-white  ">
            Update Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
