// import axios from "axios";

// // `${process.env.REACT_APP_AXIOS_API}

// const api = axios.create({
//      baseURL: `${process.env.REACT_APP_AXIOS_API}/api`,
// });

// api.interceptors.request.use(
//      function (config) {
//           console.log(config);
//           if (config.url !== "login") {
//                //토큰
//           }
//           console.log(config);
//           return config;
//      },
//      function (error) {
//           return Promise.reject(error);
//      }
// );

// export default api;

import axios from "axios";

export const axiosIns = axios.create({
    baseURL: `${process.env.REACT_APP_AXIOS_API}`,
});

export const getData = async () => {
    return await axiosIns.get("/api/main").then(res => res.data);
}