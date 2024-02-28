import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../AuthContext/AuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(UserContext);
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`user/admin/${user?.email}`);
      // console.log(result.data.admin);

      return result.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
