import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5173",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(UserContext);
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (!token) {
        console.error("Access Token is missing. Redirecting to login");
        navigate("/login");
        return Promise.reject("Access Token is missing");
      }
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
