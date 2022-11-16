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

export const getMain = async () => {
    const {data} = await axiosIns.get("/api/main");
    return data;
}

export const getProof = async () => {
    const {data} = await axiosIns.get("/api/photos");
    return data;
}