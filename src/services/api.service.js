import axios from "axios";
// import getCookie from "../utils/getCookie";

export default (baseURL) => {
  return axios.create({
    baseURL,
    commonConfig,
  });
};
const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

// axios.defaults.headers.common = { Authorization: `Bearer ${getCookie("jwt")}` };
