import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../AuthContext/AuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = () => {
  const { user } = useContext(UserContext);
  const axiosSecure = useAxiosSecure();
  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/user/${user?.email}`);
      return result.data;
    },
  });
  return [userData, refetch];
};

export default useUserData;
